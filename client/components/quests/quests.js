Template.quests.events({
  'click .unlock': function(event){
    Materialize.toast("Checking your current location.", 2000);
    var $btn = $(event.target);
    var locationLat  = $btn.data('lat');
    var locationLon  = $btn.data('long');
    var locationId  = $btn.data('location');
    Meteor.location = Locations.findOne({_id: locationId});

    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      var latdiff = Math.abs(locationLat - lat);
      var londiff = Math.abs(locationLon - lon);
      console.log(latdiff, londiff);
      if(latdiff < .0005 && londiff < .0005){
        // TODO: save to db
        var points = Meteor.user().score || 0;
        var locations = Meteor.user().locations || [];
        var currentLocationObject = _.find(locations, function(loc){
          return loc._id === locationId;
        });

        if(!currentLocationObject) {
          currentLocationObject = {
            _id: locationId,
            completed: true,
          };
          locations.push(currentLocationObject );
          points += 250;
        }
        Meteor.users.update({_id: Meteor.userId()}, {$set: {
          locations: locations,
        }
        });
        Meteor.users.update({_id: Meteor.userId()}, {$set: {
          score: points
        }
        });
        $('#popup-location-name').html(Meteor.location.name);
        $('.popup-holder').show();
      }
      else{
        Materialize.toast("Looks like you aren't close enough", 2000);
      }
    });
  }
});

Template.quests.helpers({
  quest: function() {
    return Quests.findOne({_id: this._id});
  },
  locations: function() {
    var quest = Quests.findOne({_id: this._id});

    if(quest) {
      return quest.locationIds.map(function(id){
        return Locations.findOne({_id: id});
      });
    }
  },
  totalLocations: function(){
    var quest = Quests.findOne({_id: this._id});

    if(quest){
      return quest.locationIds.length;
    }
  },
  label: function(){
    switch(this.categoryName){
      case "Food & Drinks": return "food";
      case "Landmarks": return "landmark";
      case "Testing": return "testing";
    }
    return "food";
  }
});

Template.questShow.helpers({
  totalLocations: function(){
    return this.locationIds.length;
  },
  label: function(){
    switch(this.categoryName){
      case "Food & Drinks": return "food";
      case "Landmarks": return "landmark";
      case "Testing": return "testing";
    }
    return "food";
  }
});


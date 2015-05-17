Template.quests.events({
  'click .unlock': function(event){
    var $btn = $(event.target);
    var locationLat  = $btn.data('lat');
    var locationLon  = $btn.data('long');
    var locationId  = $btn.data('location');

    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      var latdiff = Math.abs(locationLat - lat);
      var londiff = Math.abs(locationLon - lon);
      console.log(latdiff, londiff);
      if(latdiff < .0005 && londiff < .0005){
        // TODO: save to db
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
        }

        Meteor.users.update({_id: Meteor.userId()}, {$set: {
          locations: locations
        }
        });
        $('.popup-holder').show();
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
  }
});

Template.popup.events({
  'click .share-btn': function(event){
    $('.popup-holder').hide();
    $('.popup-badge-holder').show();
  }
});


Template.popupBadge.events({
  'click .share-btn': function(event){
    $('.popup-badge-holder').hide();
  }
});

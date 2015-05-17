Template.quests.events({
  'click .unlock': function(event){
    var $btn = $(event.target);
    var locationLat  = $btn.data('lat');
    var locationLon  = $btn.data('long');

    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      var latdiff = Math.abs(locationLat - lat);
      var londiff = Math.abs(locationLon - lon);
      console.log(latdiff, londiff);
      if(latdiff < .0005 && londiff < .0005){
        event.target.innerHTML = "UNLOCKED";
        event.target.classList.remove('unlock');
        event.target.classList.add('unlocked');
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

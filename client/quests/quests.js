Template.quests.events({
  'click .unlock': function(event){
    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      var latdiff = Math.abs(29.752002 - lat);
      var londiff = Math.abs(-95.37551 - lon);
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
});

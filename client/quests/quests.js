Template.quests.events({
  'click .unlock': function(event){
    navigator.geolocation.getCurrentPosition(function(pos){
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      if(Math.abs(29.752002 - lat) < .001 && Math.abs(-95.37551 - lon) < .001){
        event.target.innerHTML = "UNLOCKED";
        event.target.classList.remove('unlock');
        event.target.classList.add('unlocked');
      }
    });
  }
})

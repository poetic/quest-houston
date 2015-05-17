Template.quests.helpers({
  quest: function(){
    return findByUrl();
  },
  location: function(){
    var quest = findByUrl();
    return locations = quest.locationIds.map(function(id){
      return Locations.findOne({_id: id});
    });
  }

});

function findByUrl(){
  return Quests.findOne({_id: window.location.pathname.split(":")[1]});
}

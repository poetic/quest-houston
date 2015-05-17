UI.registerHelper('percent', function (questId) {
  var userlocationIds = _.filter(Meteor.user().locations, function(loc){
    return loc.completed;
  }).map(function(loc){
    return loc._id;
  });
  var questLocationIds = Quests.findOne({_id: questId}).locationIds;

  var locationIdsForQuest = _.intersection(questLocationIds, userlocationIds);
  var locations = Locations.find({_id: {$in: locationIdsForQuest}});

  var completedCount = locations.count();
  var totalCount = this.locationIds.length;
  return completedCount / totalCount * 100 + '%';
});



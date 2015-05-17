UI.registerHelper('unlockStatus', function (locationId) {
  var userlocationIds = _.filter(Meteor.user().locations, function(loc){
    return loc.completed;
  }).map(function(loc){
    return loc._id;
  });
  var unlocked = _.include(userlocationIds, locationId);
  return unlocked ? 'unlocked' : 'unlock';
});


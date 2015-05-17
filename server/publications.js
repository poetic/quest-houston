Meteor.publish('user', function() {
  return Meteor.users.find({}, {fields: {locations: 1}});
})

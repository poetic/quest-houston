Template.menu.rendered = function(){
  $(".button-collapse").sideNav();
}

Template.menu.helpers({
  user: function(){
    return Meteor.user();
  },
  name: function(){
    var user = Meteor.user();
    return user.services.facebook.name;
  },
  score: function(){
    var score = Meteor.users.findOne({_id: Meteor.userId()});
    console.log(score.score);
  }
});

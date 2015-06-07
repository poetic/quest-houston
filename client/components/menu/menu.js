Template.menu.rendered = function(){
  $(".button-collapse").sideNav();
};

Template.menu.helpers({
  user: function(){
    return Meteor.user();
  },
  name: function(){
    var user = Meteor.user();
    return user.services.facebook.name;
  },
  score: function(){
    var score = Meteor.users.findOne({_id: Meteor.userId()}).score;
    return score;
  },
  avatar: function(){
    var avatar = "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    return avatar;
  }
});

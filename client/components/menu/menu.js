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
    return score || 0;
  },
  avatar: function(){
    var avatar = "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
    return avatar;
  },
  badgeCount: function(){
    if(Meteor.user().badges){
      return Meteor.user().badges.length;
    }
    return 0;
  },
  badges: function(){
    if(Meteor.user().badges){
      return Meteor.user().badges;
    }
    return "";
  }

});

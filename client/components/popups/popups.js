Template.popup.events({
  'click .share-btn': function(event){
    $('.popup-holder').hide();
    Meteor.BadgeManager.checkForBadges();
    if(Meteor.BadgeManager.Badge.name){
      $('.popup-badge-holder').show();
    }
  }
});

Template.popupBadge.events({
  'click .share-btn': function(event){
    $('.popup-badge-holder').hide();
  }
});

Template.popup.helpers({
  points: 250,
});


Template.popupBadge.helpers({
  // name: function(){
  //   console.log(Meteor.BadgeManager.Badge);
  //   return badgeName;
  // },
  // image: function(){
  //   console.log(Meteor.BadgeManager.Badge.image);
  //   return Meteor.BadgeManager.Badge.image;
  // }
});

Template.popup.events({
  'click .share-btn': function(event){
    $('.popup-holder').hide();
    Meteor.BadgeManager.checkForBadges();
    if(Meteor.BadgeManager.Badge){
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
  name: function(){
    return Meteor.BadgeManager.Badge.name;
  },
  image: function(){
    return Meteor.BadgeManager.Badge.image;
  }
});

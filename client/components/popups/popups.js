Template.popup.events({
  'click .share-btn': function(event){
    $('.popup-holder').hide();
    $('.popup-badge-holder').show();
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
  name: 'Hackers Society',
  image: '../hacker-badge.png'
});

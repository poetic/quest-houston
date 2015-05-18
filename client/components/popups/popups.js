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

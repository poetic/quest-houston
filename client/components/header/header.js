Template.header.events({
  'click .curated': function(e){
    activate(e.target);
    Meteor.mySwiper.slideTo(0);
  },
  'click .trending': function(e){
    activate(e.target);
    Meteor.mySwiper.slideTo(1);
  },
  'click .new': function(e){
    activate(e.target);
    Meteor.mySwiper.slideTo(2);
  }
});

function activate(targ){
  $('.active').removeClass('active');
  $(targ).addClass('active');
}

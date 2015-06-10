Template.swiperBody.rendered = function(){
  Meteor.mySwiper = new Swiper ('.swiper-body', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  });
  Meteor.mySwiper.on('slideChangeStart', function () {
    $('.active').removeClass('active');
    switch(Meteor.mySwiper.activeIndex){
      case 0: $('.curated').addClass('active'); break;
      case 1: $('.trending').addClass('active'); break;
      case 2: $('.new').addClass('active'); break;
    }
  });
};

Template.swiperBody.helpers({
  quests: function() {
    return Quests.find({});
  }
});

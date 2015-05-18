Template.swiperBody.rendered = function(){
  var mySwiper = new Swiper ('.swiper-body', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  });
};

Template.swiperBody.helpers({
  quests: function() {
    return Quests.find({});
  }
});

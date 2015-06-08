Meteor.BadgeManager = (function(){
  var Interface = {};
  var badge = false;

  Interface.Badge = {};
  Interface.checkForBadges = function(){
    console.log('checking for badges');
    badge = lookForLocationBadges();
    console.log(badge);
    if(badge){
      console.log('badge found');
      this.Badge = badge;
      insertBadges();
    }
    else{
      this.Badge = false;
    }
  };

  return Interface;
})();

function insertBadges(){
  console.log('inserting');
  $('.badge-name').html(Meteor.BadgeManager.Badge.name);
  $('.badge').html('<img src=\"' + Meteor.BadgeManager.Badge.image + '\">');
}

function lookForLocationBadges(){
  switch(Meteor.user().locations.length){
    case 1: return Badges.findOne({name: 'First Location'}); break;
    case 5: return Badges.findOne({name: 'Five Locations'}); break;
    default: return false;
  }
}

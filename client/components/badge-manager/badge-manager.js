Meteor.BadgeManager = (function(){
  var Interface = {};
  var badge = false;

  Interface.Badge = {};
  Interface.checkForBadges = function(){
    console.log('checking for badges');
    badge = lookForLocationBadges();
    if(badge){
      this.Badge = badge;
    }
    else{
      this.Badge = false;
    }
  };

  return Interface;
})();

function lookForLocationBadges(){
  switch(Meteor.user().locations.length){
    case 1: return Badges.findOne({name: 'First Location'}); break;
    default: return false;
  }
}

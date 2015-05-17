Router.route('/', function () {
  this.render('Home', {
  });
});

Router.route('/login', function () {
  this.render('Login', {
  });
});

Router.route('/quests/:_id', function(){
  this.render('quests', {
  });
},{
  name: 'quests',
  data: {
    quests: function(){
      return Quests.findOne({name: "8 Houston Wonders"});
    },
    location: function(){
      return Quests.findOne({name: "8 Houston Wonders"}).locationIds.map(function(id){
        return Locations.findOne({_id: id});
      });
    }
  }
});

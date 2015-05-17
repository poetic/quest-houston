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
      return Quests.findOne({});
    },
    location: function(){
      return Quests.findOne({}).locationIds.map(function(id){
        return Locations.findOne({_id: id});
      });
    }
  }
});

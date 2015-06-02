Router.onBeforeAction(function () {
  // Not logged in

  this.next();
});

Router.route('/', function () {
  this.render('Home', {
  });
});

Router.route('/login', function () {
  this.render('Login', {
  });
});

Router.route('/quests/:_id', function(){
  var _id = this.params._id;

  this.render('quests', {
    data: { _id: _id }
  });
},{name: 'quests'});

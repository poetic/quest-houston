Router.route('/', function () {
  this.render('Home', {
  });
});

Router.route('/login', function () {
  this.render('Login', {
  });
});

Router.route('/quest:id', function(){
  this.render('quests', {

  });
});

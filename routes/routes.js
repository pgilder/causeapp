Router.configure({
notFoundTemplate: 'notFound', //template with name notFound
loadingTemplate: 'loading' //template with name loading
});

Router.onBeforeAction('loading'); //before every action call show


Router.route('/', function () {
  this.render('');
});

Router.route('/welcome', function () {
  this.render('welcomecard');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/signup', function () {
  this.render('signup');
});

Router.route('/srp', function () {
  // render the Home template with a custom data context
  this.render('srp', {data:
    {pagetitle: 'Search Results', cardtitle: 'School Name', carddescription: 'Yale University prestige schooling', schoolcity: 'New York, NY', schooldistance: '8.7 mi', schoolrating: '3.8'},
  });
});


Router.route('/addschool', function () {
  this.render('addschool');
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});

Router.route('/schools/:_id', {name: 'schools.show'});

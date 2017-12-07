angular.module('davesApp', ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: "home.html",
    controller: 'mainCtrl'
  })


.state('about', {
  url: '/about',
  templateUrl: "about.html",
  controller: "aboutCtrl"
})

.state('testimonials', {
  url: '/testimonials',
  templateUrl: "testimonials.html",
  controller: 'testimonialsCtrl'
})

.state('resources', {
  url: '/resources',
  templateUrl: "resources.html",
  controller: 'resourcesCtrl'
})

$urlRouterProvider
.otherwise('/');

});

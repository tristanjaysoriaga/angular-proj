'use strict';

/**
 * @ngdoc overview
 * @name angularProjApp
 * @description
 * # angularProjApp
 *
 * Main module of the application.
 */
angular
  .module('angularProjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .run(['$rootScope', '$location', '$window', '$route', function($rootScope, $location, $window, $route) {
    $rootScope.$on('$routeChangeSuccess', function(changeTo, changeFrom, previous) {
      // if (changeTo == changeFrom) {
      //   return;
      // }
      //console.log($location.$$url)
      //console.log(previous)
       //if($location.$$url.includes('utm'))
        //{ 
         //if(!$window.location.hash.includes('loaded')) {
              //$window.location.href = $window.location + '&loaded';
              //$window.location.reload(true);
              //console.log($location.$$url + '&loaded');
             // $route.current = $location.$$url + '&loaded';
             //$location.skipReload().path($location.$$url + '&loaded').replace();
 
          //}
        //}
    });
  }])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html'
        //controller: 'MessagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

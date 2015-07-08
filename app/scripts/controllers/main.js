'use strict';

/**
 * @ngdoc function
 * @name angularProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjApp
 */
angular.module('angularProjApp')
  .controller('HeaderCtrl', function ($scope, $location) 
  { 



      $scope.isActive = function (viewLocation) { 
          return viewLocation === $location.path();
      };
  })
  .controller('MainCtrl', function ($scope, $firebaseArray) {

    var ref = new Firebase("https://incandescent-torch-533.firebaseio.com/message");
    $scope.fireMessage = $firebaseArray(ref);

    $scope.tweetAuthor = "tristan 3";
    $scope.tweetMessage = "angular test 3";
    $scope.tweetProfile = "pic 3";


    $scope.addMessage = function() {
      $scope.fireMessage.$add({
        author: $scope.tweetAuthor,
        message: $scope.tweetMessage,
        profile: $scope.tweetProfile
      });
    };
    

    $scope.tweetMsg = [
      {
      	'profile':'pic 1',
		'author':'tristan 1',
      	'message':'angular test 1'
  	  },
      {
      	'profile':'pic 2',
		'author':'tristan 2',
      	'message':'angular test 2'
  	  },
      {
      	'profile':'pic 3',
		'author':'tristan 3',
      	'message':'angular test 3'
  	  },
      {
        'profile':'pic 4',
        'author':'tristan 4',
        'message':'angular test 4'
      },
      {
        'profile':'pic 5',
        'author':'tristan 5',
        'message':'angular test 5'
      },
      {
        'profile':'pic 6',
        'author':'tristan 6',
        'message':'angular test 6'
      },
      {
        'profile':'pic 7',
        'author':'tristan 7',
        'message':'angular test 7'
      },
      {
        'profile':'pic 8',
        'author':'tristan 8',
        'message':'angular test 8'
      }
    ];
  });

angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicFilterBar) {
	$rootScope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.items,
        update: function (filteredItems, filterText) {
          $scope.items = filteredItems;
          if (filterText) {
          	$scope.search = filterText;
            console.log(filterText);
          }
        }
      });
    };

    $scope.postArray = [
    {
    	'id':0,
    	'name':'adam',
    	'message':'ionic good!',
    	'image':'img/adam.jpg'
    },
    {
    	'id':1,
    	'name':'ben',
    	'message':'ionic good!',
    	'image':'img/ben.png'
    },
    {
    	'id':2,
    	'name':'ionic',
    	'message':'ionic good!',
    	'image':'img/ionic.png'
    },
    {
    	'id':3,
    	'name':'Max',
    	'message':'ionic good!',
    	'image':'img/max.png'
    },
    {
    	'id':4,
    	'name':'Mike',
    	'message':'ionic good!',
    	'image':'img/mike.png'
    },
    {
    	'id':0,
    	'name':'Perry',
    	'message':'ionic good!',
    	'image':'img/perry.png'
    }
    ]
})
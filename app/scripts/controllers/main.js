'use strict';

angular.module('eventBudgetAppApp')
  .controller('MainCtrl', function ($scope, InitialData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    InitialData.get(function(data){
      $scope.testdata = data.response;
    });

   	$scope.newItem = function () {
   		$scope.testData.push({"name":$scope.name, 
   			"estcost":$scope.estcost, 
   			"acttcost":$scope.actcost, 
   			"quantity":$scope.quantity});
   	};

  });

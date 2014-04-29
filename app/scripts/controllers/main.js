'use strict';

angular.module('eventBudgetAppApp')
  .controller('MainCtrl', function ($scope) {


    $scope.testData = [
	  	{name:'Pizza', estcost:10, actcost:9, quantity:30},
  		{name:'Napkins', estcost:2, actcost:4, quantity:950},
  		{name:'Cups', estcost:3, actcost:4, quantity:240}
	];

   	$scope.newItem = function () {
   		$scope.testData.push({"name":$scope.name, 
   			"estcost":$scope.estcost, 
   			"acttcost":$scope.actcost, 
   			"quantity":$scope.quantity});
   	};


  });

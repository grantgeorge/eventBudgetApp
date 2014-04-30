'use strict';

angular.module('eventBudgetAppApp')
  .controller('MainCtrl', function ($scope, $routeParams, InitialData, $location) {

    $scope.id = $routeParams.id;

    InitialData.get(function(data){
      $scope.testData = data.response;
    });

   	$scope.newItem = function () {
   		$scope.testData.push({"name":$scope.name, 
   			"estcost":$scope.estcost, 
   			"actcost":$scope.actcost, 
   			"quantity":$scope.quantity});
   	};

    $scope.editItem = function (i) {
      console.log(i);
      var something = $scope.testData.indexOf(i);
      $location.path('edit/' + something);
    };

    $scope.sum = function() {
      if(angular.isUndefined($scope.testData)) { return; }
      var s = 0;
      for (var i = $scope.testData.length - 1; i >= 0; i--) {
        s += $scope.testData[i].actcost;
      };
      return s;
    };

    $scope.difference = function() {
      if(angular.isUndefined($scope.testData)) { return; }
      var s = 0;
      for (var i = $scope.testData.length - 1; i >= 0; i--) {
        s += $scope.testData[i].actcost - $scope.testData[i].estcost;
      };
      return s;
    };

  }) 
  .controller('EditCtrl', function ($scope, $routeParams, InitialData, $location) {

    $scope.id = $routeParams.id;
    console.log("um");

    InitialData.get(function(data){
      console.log("HELLO?");
      $scope.testData = data.response;
      $scope.name = $scope.testData[$scope.id].name;
      $scope.actcost = $scope.testData[$scope.id].actcost;
      $scope.estcost = $scope.testData[$scope.id].estcost;
      $scope.quantity = $scope.testData[$scope.id].quantity;
    });

  });

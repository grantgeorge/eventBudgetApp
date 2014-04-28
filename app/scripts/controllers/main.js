'use strict';

angular.module('eventBudgetAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.testdata = [
	  	{name:'Pizza', estcost:10, actcost:9, quantity:30},
  		{name:'Napkins', estcost:2, actcost:4, quantity:950},
  		{name:'Cups', estcost:3, actcost:4, quantity:240}
  	];
  	
  });

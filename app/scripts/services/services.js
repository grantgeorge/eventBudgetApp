'use strict';

angular.module('eventBudgetAppApp').
  factory('InitialData', function($resource){
    return $resource('/eventBudgetApp/app/data/data.json', {}, {
      get: {method:'GET'}
    });
  });
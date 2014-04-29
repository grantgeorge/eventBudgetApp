'use strict';

angular.module('eventBudgetAppApp').
  factory('InitialData', function($resource){
    return $resource('/data/data.json', {}, {
      get: {method:'GET'}
    });
  });
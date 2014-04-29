angular.module('eventBudgetAppApp').

	factory('InitialData', function($resource, $rootScope) {
		return $resource('/data.json', {}, {
			query: {method:'GET', params:{}, isArray:false}
		});
	});

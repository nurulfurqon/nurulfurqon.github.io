/**
* You must include the dependency on 'ngMaterial'
*/
var myAppModule = angular.module('MyApp',['ngMaterial']);



myAppModule.controller('AppControl', function($scope, $timeout) {

		$scope.setLoading = function(loading) {
			$scope.isLoading = loading;
		}
	});

myAppModule.controller('AppCtrl', function($scope) {});

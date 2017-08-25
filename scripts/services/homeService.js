(function(){
	'use strict';

	angular.module('app.home')
		.factory('homeService',['$http',function($http){
			return {
				isLogin:function(url){
					return $http.post(url)
				}
			}
		}])
})();
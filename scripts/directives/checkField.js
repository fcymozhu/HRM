(function(){
	'use strict';

	angular.module('app.login')
		.directive('checkField',[function(){
			return {
				scope: {
					pattern:'@'
				},

				//require 使用的时候必须在元素上绑定 ng-model 属性
				require:'?ngModel',
				link: function($scope,ele,attrs,ngModel){
					if(!ngModel) return;
					var regexp = new RegExp($scope.pattern);
					ngModel.$parsers.unshift(function(value){
						if(regexp.test(value)){
							$(ele).popover('hide');
							ngModel.$setValidity("checkLoginname",true);
							return value;
						}else{
							$(ele).popover('show');
							ngModel.$setValidity("checkLoginname",false);
							return undefined;
						}
					})
				}
			};
		}])
})();
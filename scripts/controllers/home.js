(function(){
	'use strict';

	angular.module('app.home')
		.controller('HomeController',['$scope','homeService','$window',function($scope,homeService,$window){
			//验证用户是否登录，如果没有登录，跳转到登录页面
			var url = "http://192.168.0.100/hrm/isLogined";
			var promise = homeService.isLogin(url);

			promise.then(function(res){
				//正常返回
				if(res.data.status=="ok"){
					$scope.user=res.data.user;
				}else{
					$window.location='/'
				}
			},function(res){
				//返回失败

			})

			//home页面的控制器逻辑
		}])
		
})();
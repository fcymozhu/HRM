(function(){
	'use strict';
	//登录登录模块控制器
	angular.module('app.login')
		.controller('loginController', ['$scope','$window','loginService',function($scope,$window,loginService){
			// 初始化登录表单提示信息
			$('[data-toggle="popover"]').popover();
			$('input').blur(function(){
				$('input').popover('hide');
			});

			// 处理表单提交
			$scope.loginCheck=function(){
				var url="http://192.168.0.100/hrm/loginCheck";
				var params=$scope.user;
				var promise = loginService.login(url,params);
				promise.then(function(res){
					//服务器正常返回
					if(res.data.status=="ok"){
						// 登录成功
						
						$window.location="./views/home.html";
					}else{
						// 登录失败
						alert('用户名或密码错误');
					}
				},function(){	
					//与服务器通信失败
					alert('服务器链接失败，请稍后重试');
				})
				
			}

		}])
})();
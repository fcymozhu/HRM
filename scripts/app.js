(function(window){
	'use strict';

	angular.module('app',[])
	.controller('loginController',['$scope','$http',function($scope,$http){
		var promise = $http.post('http://192.168.0.100/hrm/loginCheck',{
			loginname:'skp',
			password:'asdf'
		})
		promise.then(function(res){
			if(res.data.status=='ok'){
				$scope.user=res.data.user;
			}
		},function(res){
			alert('请求失败');
		})
	}])



	// angular.module('app.login', [])
		// .controller('loginController', ['$scope','$http', function($scope,$http){
		// 	var promise = $http.post('http://192.168.0.100/hrm/loginCheck',{
		// 		loginname:'skp',
		// 		password:'asdf'
		// 	})
		// 	promise.then(function(res){
		// 		if(res.data.status=="ok"){
		// 			$scope.user=res.data.user;
		// 			console.log(res);
		// 		}
		// 	},function(res){

		// 	})

		// }])
})(window);
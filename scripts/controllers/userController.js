(function(){
	'use strict';

	angular.module('app.home')
		.controller('HomeController',['$scope','userService','homeService','$window',function($scope,userService,homeService,$window){
			$scope.pageIndex=1;
			$scope.offset=10;

			//home页面的控制器逻辑
			//查看所有员工信息列表
			var url = "http://192.168.0.100/hrm/user/list";
			var params = {
				pageIndex:$scope.pageIndex,
				offset:$scope.offset
			} 

			var promise = userService.getList(url,params);
			// console.log(promise);
			promise.then(function(res){
				if(res.data.status=="ok"){
					$scope.users=res.data.users;
					// console.log($scope.users);
					$scope.todalPage=Math.ceil(res.data.total/$scope.offset);
				}
			},function(res){
				console.log('list wrong');
			})


			//处理分页信息
			$scope.handlePage=function(pageNum){
				$scope.pageIndex = $scope.pageIndex+pageNum;
				if($scope.pangeIndex<1){
					$scope.pangeIndex=1;
				}
				if($scope.pangeIndex>$scope.totalPage){
					$scope.pangeIndex=$scope.totalPage;
				} 

				var params = {
					pageIndex:$scope.pageIndex,
					offset:$scope.offset
				} 

				var promise = userService.getList(url,params);
				promise.then(function(res){
					$scope.users=res.data.users;
				},function(res){
					console.log('list wrong');
				})

			}



			// 增加信息
			$scope.addUser = function(){
				var url = "http://192.168.0.100/hrm/user/save";
				
				var params = {
					loginname:$scope.addloginname,
					password:$scope.addpassword,
					status:$scope.addstatus
				}
				console.log(params);
				var promise = userService.getList(url,params);

				promise.then(function(res){
					var url = "http://192.168.0.100/hrm/user/list";
					var params = {
						pageIndex:$scope.pageIndex,
						offset:$scope.offset
					} 

					var promise = userService.getList(url,params);
					// console.log(promise);
					promise.then(function(res){
						if(res.data.status=="ok"){
							$scope.users=res.data.users;
							console.log("添加成功");
						}
					},function(res){
						console.log('list wrong');
					})
				},function(res){

				})
			}


			//删除信息
			$scope.delUser=function(e){
				var url = "http://192.168.0.100/hrm/user/delete";
				var params= {
					id:e
				}
				var promise = userService.getList(url,params);
				promise.then(function(res){
					var url = "http://192.168.0.100/hrm/user/list";
					var params = {
						pageIndex:$scope.pageIndex,
						offset:$scope.offset
					} 

					var promise = userService.getList(url,params);
					// console.log(promise);
					promise.then(function(res){
						if(res.data.status=="ok"){
							$scope.users=res.data.users;
							console.log("删除成功");
						}
					},function(res){
						console.log('list wrong');
					})
				},function(res){

				})
			}



			//修改信息
			$scope.editUser = function(id,loginname,password,status){
				$scope.dates={id:id,loginname:loginname,password:password,status:status};
				console.log($scope.dates);
				$scope.id=$scope.dates.id;
				$scope.loginname=$scope.dates.loginname;
				$scope.password=$scope.dates.password;
				$scope.status=$scope.dates.status;
			}
				//保存修改的信息
				$scope.saveEdit = function(id,loginname,password,status){
					var url = "http://192.168.0.100/hrm/user/edit";
					var params = {
						id:id,
						loginname:loginname,
						password:password,
						status:status
					};
					console.log(params)
					var promise = userService.getList(url,params);
					promise.then(function(res){
						var url = "http://192.168.0.100/hrm/user/list";
						var params = {
							pageIndex:$scope.pageIndex,
							offset:$scope.offset
						} 

						var promise = userService.getList(url,params);
						promise.then(function(res){
							if(res.data.status=="ok"){
								$scope.users=res.data.users;
								console.log("保存成功");
							}
						},function(res){
							console.log('list wrong');
						})
					},function(res){

					})
				}
				

		}])
		
})();
ToDoControllers.controller('TodoCtrl', ['$scope',
  function ($scope) {
     $scope.data={
	    taskList:[{
			  name:"Task 1",
			  action : true,
			  deleteTask:false,
			},
			{
			  name:"Task 2",
			  action : true,
			  deleteTask:false,
			},
			{
			  name:"Task 3",
			  action : false,
			  deleteTask:false,
			},
			{
			  name:"Task 4",
			  action : true,
			  deleteTask:false,
			},{
			  name:"Task 5",
			  action : true,
			  deleteTask:false,
			},{
			  name:"Task 6",
			  action : true,
			  deleteTask:false,
			}]
	 };
}]);
ToDoControllers.controller('HeaderCtrl', ['$scope',
  function ($scope) {
     $scope.data={
	    appName:"Todo Application",
		menuList:[{mnuName:"Home 11",selected:true,pageName:"todo"},{mnuName:"List 22",selected:false,pageName:"list"}]
	 }
}]);
//Bootstraping 


appTodo.
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/todo', {templateUrl: 'partials/Todo.html', controller: "TodoCtrl"}).
	  when('/list', {templateUrl: 'partials/ListPage.html', controller: "ListCtrl"}).
      otherwise({redirectTo: '/todo'});
}]);
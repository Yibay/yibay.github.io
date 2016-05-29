app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.when("/",{templateUrl: "template/home.html"})
	.when("/module",{templateUrl: "template/list.html"})
	.when("/web",{template: "web"})
	.when("/course",{template: "course"})
	.otherwise({redirectTo: "/"});
}]);
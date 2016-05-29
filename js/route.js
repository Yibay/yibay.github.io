app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.when("/",{templateUrl: "template/home.html"})
	.when("/module",{template: "module"})
	.when("/web",{template: "web"})
	.when("/course",{template: "course"})
	.otherwise({redirectTo: "/"});
}]);
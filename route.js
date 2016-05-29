app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.when("/",{template: 1111})
	.when("/list",{templateUrl: "route.js"})
	.when("/form",{template: "form"})
	.otherwise({redirectTo: "/"});
}]);
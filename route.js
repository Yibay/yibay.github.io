app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.when("/",{template: 1111})
	.when("/list",{templateUrl: "list.html"})
	.when("/form",{template: "form"})
	.otherwise({redirectTo: "/"});
}]);
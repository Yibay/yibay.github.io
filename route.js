app.config(["$routeProvider",function ($routeProvider) {
	$routeProvider.when("/",{template: 1111})
	.when("/list",{templateUrl: "https://github.com/Yibay/netease-education/tree/gh-pages/css/index.html"})
	.when("/form",{template: "form"})
	.otherwise({redirectTo: "/"});
}]);
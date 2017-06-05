var app = angular.module('SuggestionBoxApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		});
});
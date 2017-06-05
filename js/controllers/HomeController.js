app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){

	console.log(suggestions);
	$scope.posts = suggestions.posts;
	$scope.title = 'Suggestion Box';
}]);
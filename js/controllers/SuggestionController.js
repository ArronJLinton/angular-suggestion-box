app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams,suggestions){

	$scope.post = suggestions.posts[$routeParams.id]

	$scope.addComment = function(){
		$scope.post.push({
			comments: {
				body: $scope.comment,
				upvote: 0,
			};
		});
	};

	$scope.upvoteComment = function(comment){
		console.log(index);
		$scope.post.upvote += 1;
	};



}]);
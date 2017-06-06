app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){

	console.log(suggestions.posts);
	$scope.posts = suggestions.posts;
	$scope.heading = 'Suggestion Box';

	$scope.addSuggestion = function(){
			
			console.log($scope.title);
		// if(!$scope.title || $scope.title === ""){
		// 	return;
		// }else{
			$scope.posts.push({
				title: $scope.title,
				upvotes: 0
			});
		// }
		$scope.title = '';
	};

	$scope.upVote = function(index){
		console.log(index);
		$scope.posts[index].upvotes += 1;
	};
}]);
// Service for storing suggestions

app.factory('suggestions', [function(){
	 var suggestions = {
			posts: [
			{
				title: 'Free water bottles at clubs',
				upvotes: 10,
				comments: [],
			},
			{
				title: 'Assortment of breakfast foods and snacks at work',
				upvotes: 25,
				comments: [],
			},
			{
				title: 'Free water bottles at clubs',
				upvotes: 10,
				comments: [],
			},
		]
	};
	return suggestions;
}]);
var AppActions = require('../actions/AppActions');

module.exports = {
	searchText: function(search){
		console.log('API searching for '+search.text);
		/*setting the API to a variable called url and sets the format to json 
		and setting the pretty variable = 1 makes the json format look nice*/
		var url = 'http://api.duckduckgo.com/?q='+search.text+'&format=json&pretty=1';
		//ajax call
		$.ajax({
			url: url,
			dataType: 'jsonp', //using jsonp here stops domain script errors
			cache: false,
			success: function(data){
				AppActions.receiveResults(data.RelatedTopics);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	}
}
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Result = React.createClass({
	render: function(){
		return(
			<div>
				//dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM
				<p className="content lead" dangerouslySetInnerHTML={{__html:this.props.result.Result}}></p>
			</div>
		);
	}

});

module.exports = Result;
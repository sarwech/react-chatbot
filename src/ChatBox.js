import React, { Component } from 'react';

class ChatBox extends Component {

	propTypes: {
		message: React.PropTypes.string
	};
	render() {
		return (
			<div className="App-header">
				Me: {this.props.passedVal}
			</div>
		)
	}
}

export default ChatBox;
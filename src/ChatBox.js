import React, { Component } from 'react';

class ChatBox extends Component {

	render() {
		return (
			<div className="App-header">
				Message: {this.props.passedVal}
			</div>
			)
	}
}

export default ChatBox;
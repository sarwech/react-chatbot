import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fieldVal: ""
		}
	}

	update = (e) => {
		console.log(e.target.value);
		this.props.onUpdate(e.target.value);
		this.setState({fieldVal: e.target.value});
	};

	render() {
		return (
			<div className="App">
				<h2>Your Message</h2>
				<input 
					type="text" 
					placeholder="type here" 
					onChange={this.update}
					value={this.state.fieldVal} 
				/>
			</div>
			)
	}
}

export default Input;
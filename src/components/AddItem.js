import React from 'react';
import {Button} from 'react-bootstrap';
import './additem.css';

class AddItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inputValue: ''
		};
		this.updateInputValue = this.updateInputValue.bind(this);
		this.addItem = this.addItem.bind(this);
	}
	updateInputValue(evt){
		this.setState({
			inputValue: evt.target.value
		});
	}
	addItem(evt){
		evt.preventDefault();
		this.props.addItem(this.state.inputValue);
		this.setState({
			inputValue: ''
		});
	}
	render(){
		return(
			<form>
				<input type = "text" value = {this.state.inputValue} onChange = {this.updateInputValue}/><Button bsStyle = "success" onClick = {this.addItem}>Add</Button>
			</form>
		)
	}
}

export default AddItem;
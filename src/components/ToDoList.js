import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class ToDoList extends React.Component{
	constructor(props){
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(itemToDelete){
		this.props.deleteItem(itemToDelete);
	}

	render(){
		const toDoItems = this.props.toDos.map((todo, i) => {
			return (
			<div key = {i}>
				<Grid>
					<Row className = "show-grid">
						<Col xs = {3} xsOffset = {3}>
							<p>{todo}</p> 
						</Col>
						<Col xs = {3}>
							<Button bsStyle="danger" onClick = {() => this.deleteItem(todo)}>X</Button>
						</Col>
					</Row>
				</Grid>
				<hr width = "50%"/>
			</div>)
		})
		return (
			<div>{toDoItems}</div>
		)
	}
}

export default ToDoList;
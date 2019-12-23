import React from 'react'
import { Button, TextField } from '@material-ui/core';
import OutlinedButton from '../components/outlined-button';

class AddTodo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			addingToDo: false,
			title: '',
			price: ''
		}
	}

	newTodo = () => {
		this.setState(() => {
			return {addingToDo: true}
		})
	}

	titleChange = (event) => {
		this.setState({title: event.target.value})
	}

	priceChange = (event) => {
		this.setState({price: event.target.value})
	}

	addTodo = () => {
		console.log("add to do")
		this.props.addTodoItem(this.state.title, this.state.price)
		this.setState({title: '' ,price: '', addingToDo: false})
	}

	render() {
		if (this.state.addingToDo) {
			return (
				<>
					<span>
						Address: 
					</span> 
					<TextField variant="outlined" value={this.state.title} onChange={this.titleChange} type="text" />
					<span >
						Price: 
					</span> 
					<TextField type="number" variant="outlined" value={this.state.price} onChange={this.priceChange} type="text" />
					<OutlinedButton color="secondary" 
					onClick={this.addTodo}>Add Delivery</OutlinedButton>

				</>
			)
		} else {
			return (
				
					<OutlinedButton color="secondary" onClick={this.newTodo}>New Delivery +</OutlinedButton>
				
			)
		}
	}
}

export default AddTodo
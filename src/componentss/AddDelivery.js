import React from 'react'
import { Button, TextField } from '@material-ui/core';
import OutlinedButton from '../components/outlined-button';

class AddDelivery extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			addingDelivery: false,
			address: '',
			price: ''
		}
	}

	newDelivery = () => {
		this.setState(() => {
			return {addingDelivery: true}
		})
	}

	addressChange = (event) => {
		this.setState({address: event.target.value})
	}

	priceChange = (event) => {
		this.setState({price: event.target.value})
	}

	addDelivery = () => {
		console.log("add delivery")
		this.props.addDeliveryItem(this.state.address, this.state.price)
		this.setState({address: '' ,price: '', addingDelivery: false})
	}

	render() {
		if (this.state.addingDelivery) {
			return (
				<>
					<span>
						Address: 
					</span> 
					<TextField variant="outlined" value={this.state.address} onChange={this.addressChange} type="text" />
					<span >
						Price: 
					</span> 
					<TextField type="number" variant="outlined" value={this.state.price} onChange={this.priceChange} type="text" />
					<OutlinedButton color="secondary" 
					onClick={this.addDelivery}>Add Delivery</OutlinedButton>

				</>
			)
		} else {
			return (
				
					<OutlinedButton color="secondary" onClick={this.newDelivery}>New Delivery +</OutlinedButton>
				
			)
		}
	}
}

export default AddDelivery;
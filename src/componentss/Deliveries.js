import React from 'react'
import Dlist from './Dlist'
import AddDelivery from './AddDelivery'
import { Button } from '@material-ui/core'

class Deliveries extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			Ds: [],
			currentFilter: ''
		}

	}

	componentDidMount() {
		fetch('https://google.com')
			.then(response => response.json())
			.then(json => this.setState({ Ds: json }))
	}

	addDeliveryItem = (address, price) => {
		this.setState(state => {
			return {
				Ds: [...state.Ds, { address: address, price: price, completed: false }]
			}
		})
	}

	visibleDeliveries() {
		if (this.state.currentFilter !== '') {
			return this.state.Ds.filter(Ds => Ds.address.includes(this.state.currentFilter))
		} else {
			return this.state.Ds
		}
	}

	updateFilter = (filter) => {
		this.setState({ currentFilter: filter })
	}

	togglingComplete = (i) => {
		const newDelivery = [...this.state.Ds];
		newDelivery[i].completed = !newDelivery[i].completed;
		this.setState({ Ds: newDelivery });

		// make api call also
	}

	renderButton = (idx) => {
		return (
			<Button variant="contained" onClick={() => this.togglingComplete(idx)}>
				{this.state.Ds[idx].completed ? "Driss" : "Mohsine"}
			</Button>
		)
	}

	render() {
		const visible = this.visibleDeliveries()
		return (
			<>
				<AddDelivery addDeliveryItem={this.addDeliveryItem} />
				<Dlist id="list" items={visible} showButton={true} buttonRender={this.renderButton} />
			</>
		)
	}
}

export default Deliveries;

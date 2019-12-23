import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Search from './Search'
import { Button } from '@material-ui/core'

class Todos extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: [],
			currentFilter: ''
		}

	}

	componentDidMount() {
		fetch('https://google.com')
			.then(response => response.json())
			.then(json => this.setState({ todos: json }))
	}

	addTodoItem = (title, price) => {
		this.setState(state => {
			return {
				todos: [...state.todos, { title: title, price: price, completed: false }]
			}
		})
	}

	visibleTodos() {
		if (this.state.currentFilter !== '') {
			return this.state.todos.filter(todo => todo.title.includes(this.state.currentFilter))
		} else {
			return this.state.todos
		}
	}

	updateFilter = (filter) => {
		this.setState({ currentFilter: filter })
	}

	togglingComplete = (i) => {
		const newTodos = [...this.state.todos];
		newTodos[i].completed = !newTodos[i].completed;
		this.setState({ todos: newTodos });

		// make api call also
	}

	renderButton = (idx) => {
		return (
			<Button variant="contained" onClick={() => this.togglingComplete(idx)}>
				{this.state.todos[idx].completed ? "Driss" : "Mohsine"}
			</Button>
		)
	}

	render() {
		const visible = this.visibleTodos()
		return (
			<>
				<AddTodo addTodoItem={this.addTodoItem} />
				<Search updateFilter={this.updateFilter} />
				<TodoList id="list" items={visible} showButton={true} buttonRender={this.renderButton} />
			</>
		)
	}
}

export default Todos
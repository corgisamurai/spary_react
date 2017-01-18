import React from 'react'
import { Component } from 'react'
import TodoInput from './input'
import TodoList from './list'

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {todos: this.props.initialTodos};
	}
	onAddToDo(newTodo){
		this.setState({
			todos : this.state.todos.concat([{todo:newTodo}])
		});
	}
	onDeleteToDo(i){
		alert(`${i}番目を削除`)
		this.state.todos.splice(i, 1)
		this.setState({
			todos : this.state.todos
		});
	}
	render () {
		return (
			<div>
				<TodoInput onAddToDo={this.onAddToDo.bind(this)}/>
				<TodoList onDeleteToDo={this.onDeleteToDo.bind(this)} todos={this.state.todos}/>
			</div>
		)
	}
}

export default Todo

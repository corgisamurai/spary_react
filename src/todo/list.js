import React from 'react'
import { Component } from 'react'

class TodoList extends Component {
	_onDeleteToDo(i){
	  this.props.onDeleteToDo(i);
	}
	render () {
		return (
			<ul>
				{this.props.todos.map((todo,i)=>{
					return <li onClick={this._onDeleteToDo.bind(this, i)}>{todo.todo}</li>
				})}
			</ul>
		)
	}
}

export default TodoList

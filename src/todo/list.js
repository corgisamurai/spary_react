import React from 'react'

class TodoList extends React.Component {
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

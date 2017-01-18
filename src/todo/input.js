import React from 'react'
import { Component } from 'react'

class TodoInput extends Component {
  _onAddToDo(){
		var newTodo = this.refs.todo.value.trim();
		this.props.onAddToDo(newTodo);
		this.refs.todo.value="";
	}
	_getOnsen(){
    console.log("Onsen");
    axios.post('localhost:8080/onsen/list')
      .then(function (res) {
        console.log(res.data);
      });
	}
	render () {
		return (
			<div>
				<input type="text" ref="todo" />
				<input type="button" value="submit" onClick={this._onAddToDo.bind(this)} />
				<input type="button" value="温泉を取得" onClick={this._getOnsen.bind(this)} />
			</div>
		)
	}
}

export default TodoInput

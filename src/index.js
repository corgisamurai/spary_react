import React from 'react'
import ReactDOM from 'react-dom'

class Todo extends React.Component {
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
		this.setState({
			// todos : this.state.todos.splice(i, 1)
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

class TodoInput extends React.Component {
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

Todo.defaultProps = {initialTodos: [{todo:"foo"},{todo:"bar"}]};

ReactDOM.render(
	<Todo />,
	document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './todo/todo'

Todo.defaultProps = {initialTodos: [{todo:"foo"},{todo:"bar"}]};

ReactDOM.render(
	<Todo />,
	document.getElementById('root')
);

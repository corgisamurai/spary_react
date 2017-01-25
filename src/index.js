import React from 'react'
import ReactDOM from 'react-dom'
import SpaList from './spa/list'
// import Todo from './todo/todo'

// Todo.defaultProps = {initialTodos: [{todo:"foo"},{todo:"bar"}]};
// ReactDOM.render(
// 	<Todo />,
// 	document.getElementById('app')
// );

ReactDOM.render(
	<SpaList />,
	document.getElementById('spa')
);

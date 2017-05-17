import React from 'react'
import ReactDOM from 'react-dom'
import SpaList from './spa/list'
import SpaDetail from './spa/detail'
import SpaLogin from './spa/login'
import { Router, Route, Link, browserHistory } from 'react-router'

// import Todo from './todo/todo'

// Todo.defaultProps = {initialTodos: [{todo:"foo"},{todo:"bar"}]};
// ReactDOM.render(
// 	<Todo />,
// 	document.getElementById('app')
// );

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SpaLogin}></Route>
    <Route path="/spa" component={SpaList}></Route>
    <Route path="/spa/:id" component={SpaDetail}></Route>
  </Router>
), document.getElementById('spa'))

import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router';


class SpaLogin extends Component {
	render () {
		return (
			<div>
        <h1>Login</h1>
        <label>id:</label>
        <input type="text" ref="id" />
        <label>password:</label>
        <input type="password" ref="password" />
        <Link to="/spa">
          submit
        </Link>
		  </div>
		)
  }
}

export default SpaLogin

import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router';


class SpaLogin extends Component {
  _onSubmit(){
    var id = this.refs.id.value.trim();
    var password = this.refs.password.value.trim();
    //TODO:go側と繋げる
    // axios.post('/v1/login',{
    //   userName:id,
    //   password:password
    // }).then(function (res) {
    //     console.log(res.data);
    //   });
  }
	render () {
		return (
			<div>
        <h1>Login</h1>
        <label>id:</label>
        <input type="text" ref="id" />
        <label>password:</label>
        <input type="password" ref="password" />
        <Link to="/spa" />
        <input type="button" value="submit" onClick={this._onSubmit.bind(this)}/>

		  </div>
		)
  }
}

export default SpaLogin

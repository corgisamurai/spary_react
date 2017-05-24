import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router';


class SpaLogin extends Component {
  _onSubmit(){
    var id = this.refs.id.value.trim();
    var password = this.refs.password.value.trim();
    console.log("id is :"+id);
    console.log("password is :"+ password);

    axios.get('/v1/auth/'+id+'/'+password).then(function (res) {
        if(res.data=='success'){
          return true;
        }else{
          return false;
        }
      });
  }
	render () {
		return (
			<div>
        <h1>Login</h1>
        <label>id:</label>
        <input type="text" ref="id" />
        <label>password:</label>
        <input type="password" ref="password" />
        <Link to="/spa" >
          <input type="button" value="submit" onClick={this._onSubmit.bind(this)}/>
        </Link>
		  </div>
		)
  }
}

export default SpaLogin

import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router';



class SpaLogin extends Component {
  _onSubmit(e){
    var id = this.refs.id.value.trim();
    var password = this.refs.password.value.trim();
    console.log("id is :"+id);
    console.log("password is :"+ password);
    var p = this.props;
    axios.get('/v1/auth/'+id+'/'+password).then(function (res) {
      if(res.data=='success'){
        console.log("true");
        p.router.push({
        pathname:'/spa'
        })
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
        <input type="button" value="submit" onClick={this._onSubmit.bind(this)}/>
		  </div>
		)
  }
}

export default SpaLogin

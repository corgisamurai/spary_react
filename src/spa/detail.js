import React from 'react'
import { Component } from 'react'

class SpaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { spa: [] }
  }
  componentDidMount () {
    this.getSpa()
  }
  getSpa () {
    axios
    .get('/v1/spa/' + this.props.params.id)
    .then((res) => {
      console.log(res.data)
      this.setState({spa: res.data})
    })
  }

	render () {
		return (
			<div>
        <dl>
          <dt>温泉名</dt>
          <dd>{ this.state.spa.name }</dd>
          <dt>住所</dt>
          <dd>{ this.state.spa.address }</dd>
          <dt>ホームページ</dt>
          <dd>{ this.state.spa.url }</dd>

        </dl>
			</div>
		)
	}
}

export default SpaDetail

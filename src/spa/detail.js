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
          <dt>写真イメージ</dt>
          <dd><img src={`${this.state.spa.image}` } /></dd>
          <dt>営業時間</dt>
          <dd>{ this.state.spa.workday }</dd>
          <dt>料金</dt>
          <dd>{ this.state.spa.fee }</dd>
          <dt>効能</dt>
          <dd>{ this.state.spa.effect }</dd>
          <dt>設備</dt>
          <dd>{ this.state.spa.equipment }</dd>
          <dt>住所</dt>
          <dd>{ this.state.spa.address }</dd>
          <dt>ホームページ</dt>
          <dd>{ this.state.spa.url }</dd>
          <dt>電話番号</dt>
          <dd>{ this.state.spa.tel }</dd>
        </dl>
			</div>
		)
	}
}

export default SpaDetail

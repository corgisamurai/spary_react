import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router';


class SpaList extends Component {
	constructor(props) {
		super(props);
		this.state = { spas: [] }
	}
	componentDidMount () {
		this.getSpaList()
	}
	getSpaList () {
		axios
		.post('/api/spa/list')
		.then(function (res) {
			this.setState({spas: res.data.spa})
		}.bind(this))
	}
	render () {
		let spaItem = {
			"color": "black",
			"textDecoration": "none"
		};
		let spaList = []
		this.state.spas.forEach(function(spa){
			spaList.push(
				<Link key={spa.id} to={'/spa/' + spa.id} style={spaItem}>
					<div >
						<p>温泉名：{spa.name}</p>
						<p>住所：{spa.address}</p>
						<hr/>
					</div>
				</Link>
			);
		});
		return (
			<div>
				{spaList}
			</div>
		)
	}
}

export default SpaList

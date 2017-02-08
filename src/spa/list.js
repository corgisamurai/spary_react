import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router';


class SpaList extends Component {
	constructor(props) {
		super(props);
		this.state = { spas: [] }
	}
	componentDidMount () {
		let self = this
		axios
			.post('/api/spa/list')
			.then(function (res) {
				self.setState({spas: res.data.spa})
			})
	}
	render () {
		let spaItem = {
			"color": "black",
			"text-decoration": "none"
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

import React from 'react'
import { Component } from 'react'

class SpaList extends Component {
	constructor(props) {
		super(props);
		axios
			.post('/api/onsen/list')
			.then(function (res) {
				console.log('ここでGoからもらったJSONをstateに入れる');
				console.log(res.data);
			})
		this.state = {
			spas: [
				{
					id: 1,
					name: '木下温泉',
					address: '東日本橋'
				},
				{
					id: 2,
					name: '大坂温泉',
					address: '博多'
				},
			]
		};
	}
	render () {
		let spaList = []
		for(var i in this.state.spas){
			spaList.push(
				<a href={'/spa/' + this.state.spas[i].id}>
					<div>
						<p>温泉名：{this.state.spas[i].name}</p>
						<p>住所：{this.state.spas[i].address}</p>
						<hr/>
					</div>
				</a>
			);
		}
		return (
			<div>
				{spaList}
			</div>
		)
	}
}

export default SpaList

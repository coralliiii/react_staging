import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

	state = { 
		users: [],
		isFirst:true,
		isLoading:false,
		err:''
	}//初始化状态

	updateApps = (stareObj) => {
		this.setState(stareObj)
	}

	render() {
		const { users } = this.state
		return (
			<div className="container">
				<Search updateApps={this.updateApps} />
				<List {...this.state} />
			</div>
		)
	}
}

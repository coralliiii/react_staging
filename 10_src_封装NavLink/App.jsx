import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Home from './pages/home'//路由组件
import About from './pages/about'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件 */}
							{/* <NavLink activeClassName='hogwards' className='list-group-item' to="/about">About</NavLink>
							<NavLink activeClassName='hogwards' className='list-group-item' to="/home">Home</NavLink> */}
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Route path="/about" component={About} />
								<Route path="/home" component={Home} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

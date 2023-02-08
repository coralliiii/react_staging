import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Home from './pages/Home'//路由组件
import About from './pages/About'
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
							<MyNavLink to="/home/a/b">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									{/* <Route exact path="/about" component={About} />
									<Route exact path="/home" component={Home} /> */}
									<Route path="/about" component={About} />
									<Route path="/home" component={Home} />
									{/* 路由的严格匹配与模糊匹配
									1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
									2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
									3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由 */}
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

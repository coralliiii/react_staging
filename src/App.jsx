import React, { Component } from 'react'
import { Button, DatePicker, ConfigProvider } from 'antd';
import {
	WechatOutlined,
	SmileTwoTone
} from '@ant-design/icons';

export default class App extends Component {
	render() {
		return (
			<div>
				App....
				<button>点我</button>&nbsp;&nbsp;
				<Button type="primary ">Primary Button</Button>&nbsp;&nbsp;
				<Button type="ghost">Primary Button</Button>&nbsp;&nbsp;
				<Button type="dashed ">Primary Button</Button>&nbsp;&nbsp;
				<Button type="link ">Primary Button</Button>&nbsp;&nbsp;
				<Button type="text  ">Primary Button</Button>&nbsp;&nbsp;
				&nbsp;&nbsp;<WechatOutlined />&nbsp;&nbsp;
				&nbsp;&nbsp;<SmileTwoTone />&nbsp;&nbsp;
				<DatePicker onChange={''} />
				<hr />
				<hr />
				<hr />
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#00b96b',
						},
					}}
				><Button type="primary ">Primary Button</Button>&nbsp;&nbsp;
				<Button type="ghost">Primary Button</Button>&nbsp;&nbsp;
				<Button type="dashed ">Primary Button</Button>&nbsp;&nbsp;
				<Button type="link ">Primary Button</Button>&nbsp;&nbsp;
				<Button type="text  ">Primary Button</Button>&nbsp;&nbsp;
				&nbsp;&nbsp;<WechatOutlined />&nbsp;&nbsp;
				&nbsp;&nbsp;<SmileTwoTone />&nbsp;&nbsp;
				<DatePicker onChange={''} />
				</ConfigProvider>
			</div>
		)
	}
}

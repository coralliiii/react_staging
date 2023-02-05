import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {

    search = () => {
        // 获取用户的输入
        const { keyWordElement: { value: keyWord } } = this //连续解构赋值并重命名
        // 发送请求前通知App更新状态
        this.props.updateApps({ isFirst: false, isLoading: true })
        console.log(keyWord)
        // 发送网络请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log("成功了", response.data)
                this.props.updateApps({ isLoading: false, users: response.data.items })
            },
            error => {
                console.log("失败了", error)
                this.props.updateApps({isLoading:false,err:error})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}

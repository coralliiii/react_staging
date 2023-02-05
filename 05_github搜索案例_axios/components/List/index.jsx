import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color:'red'}}>{err.message}</h2> :
                    this.props.users.map((userObj)=>{
                        return(
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel='noreferrer'>
                                    <img src={userObj.avatar_url} style={{ width: '100px' }} alt='' />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

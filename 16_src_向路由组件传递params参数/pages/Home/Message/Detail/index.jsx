import React, { Component } from 'react'

const DetailData = [
    {id:'01',content:'HarryPotter'},
    {id:'02',content:'Hermione'},
    {id:'03',content:'Ron'},
]

export default class index extends Component {
    render() {
        console.log(this.props)
        // 接受params参数
        const {id,title} = this.props.match.params
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}

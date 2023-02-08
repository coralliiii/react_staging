import React, { Component } from 'react'
// import qs from 'query-string'

const DetailData = [
    {id:'01',content:'HarryPotter'},
    {id:'02',content:'Hermione'},
    {id:'03',content:'Ron'},
]

export default class index extends Component {
    render() {
        console.log(this.props)
        // 接受params参数
        // const {id,title} = this.props.match.params

        // 接受search参数
        // const {search} =  this.props.location
        // const result = qs.parse(search.slice(1))
        // const {id,title} = result
        // console.log(result)

        // 接受state参数
        const {id,title} = this.props.location.state || {}


        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}

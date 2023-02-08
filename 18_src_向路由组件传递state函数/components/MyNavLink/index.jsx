import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class index extends Component {
  render() {
    console.log(this.props)
    return (
      <NavLink activeClassName='hogwards' className='list-group-item' {...this.props}/>
    )
  }
}

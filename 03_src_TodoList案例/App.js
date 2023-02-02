import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:false},
    ]
  }
  
  // addTodo用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }
  
  // updateTodo用于更新一个todo对象
  updateTodo = (id,done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo = (id)=>{
    // 获取原来的todos
    const {todos} = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    // 更新状态
    this.setState({todos:newTodos})
  }

  checkAllTodo = (doneValue)=>{
    // 获取原来的 todos
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:doneValue}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone = ()=>{
    // 获取原来的 todos
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

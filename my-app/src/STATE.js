import React, { Component } from 'react'

export default class STATE extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0,
     
  }
}

  handleincrement = () =>{
        this.setState({
            count : this.state.count+1
        })
  }

  handledecrement = () =>{
    this.setState({
        count : this.state.count-1
    })
  }

  render() {
    const {count} = this.state
    return (
    <div>
        <h2>Count 1-10</h2>
      <h1> Count : {count}</h1>
      <button onClick={this.handleincrement}disabled ={count ===10 ? true : false}>+</button>
    <button onClick={this.handledecrement} disabled ={count ===0 ? true : false}>-</button>
    
    </div>

    )
  }
}

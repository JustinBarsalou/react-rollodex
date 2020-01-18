import React, { Component } from 'react'

export default class Person extends Component {

    constructor(props){
      super(props);
      this.state={
      isClicked: false
      }
      this.isClicked = this.isClicked.bind(this)
  
    }


  isClicked(){
    this.setState(state => ({
      isClicked: !state.isClicked
    }))
  }


  render() {
    console.log(this.props)
    if (!this.state.isClicked) {
    return (
      <div>
      <h1 className='name' >{this.props.firstName + ' ' + this.props.lastName}</h1> 
      {/* <h1>{this.props.lastName}</h1>  */}
      <img src = {this.props.thumbnail}></img>
      <button onClick={this.isClicked}>Show Info</button>
      </div>
    )

  }
  else { 
    return (
      <div>
        <h1 className='name' >{this.props.firstName + ' ' + this.props.lastName}</h1> 
        {/* <h1 key='Last Name'>{this.props.lastName}</h1>  */}
        <img src = {this.props.thumbnail}></img>
        <h2 className='Age'>Age : {this.props.age}</h2>
        <h2 className='Phone Number'>Age : {this.props.phone}</h2>
        <button onClick={this.isClicked}>Hide Info</button>
        <p key></p>

      </div>
    )

    }
  }
}



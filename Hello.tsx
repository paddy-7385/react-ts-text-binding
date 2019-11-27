import React, { Component } from 'react';

export default class Hello extends Component {

  constructor(props){
    super(props);    
    this.state = {
      text: ""
    }
    this.setText = this.setText.bind(this);
  }

  setText(event){
    this.setState({text: event.target.value})    
  }

  render() {
    return(
      <div>
        <input name= "inputText" onChange = {this.setText} ></input>
        <div name ="outputText">{this.state.text}</div>
      </div>
    )
  }
}

//create ref
import React, { Component } from 'react';

export default class Hello extends Component {

  constructor(props){
    super(props);    
    this.state = {
      text: ""
    }
    this.setText = this.setText.bind(this);
    this.onClicked = this.onClicked.bind(this);
    this.inputHandler = React.createRef();
  }

  setText(event){
    this.setState({text: event.target.value})    
  }

  onClicked(){
    this.inputHandler.current.focus();
  }

  render() {    
    return(
      <div>
        <input type= "text"  ref={this.inputHandler} onChange = {this.setText}></input>
        <input type= "button" onClick = {this.onClicked}  Value= "Click me" ></input>
        <div name ="outputText">{this.state.text}</div>
      </div>
    )
  }
}
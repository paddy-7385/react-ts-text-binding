//callback ref
import React, { Component } from 'react';

export default  function HelloFunc() {
  let inputHandler;

  function onClicked(){
    inputHandler.focus();
  }

  return(
    <div>
     <input type= "text" ref = {(handle) => inputHandler = handle} />
     <input type= "button" onClick = {onClicked}  Value= "Click me2" ></input>
    </div>
  )
}
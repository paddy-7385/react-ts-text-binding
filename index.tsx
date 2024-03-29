import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import HelloFunc from './HelloFunc';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <HelloFunc name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

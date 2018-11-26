import React, { Component } from 'react';
import Header from './header';
import {Button} from './button';

function Welcome(props) {
  return (
    <div className='app'>
      <h1>Hello, {props.name}</h1>
    </div>
  );
      
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 9,
      count2: 11,
      asdf: 'asdfg',
      poiu: 987
    }
  }

  rogue(arg) {
    this.setState({count: this.state.count + arg})
  }

  doubleIncrement(arg) {
    this.setState({count2: this.state.count2 + arg})
  }

  render() {    
    return (
      <div>
        <Header />
        <Header />
        <Welcome name='Dev' />
        <Welcome name='Second' />
        <Welcome name='Third' />

        <Button title='Amazing Button' counter={() => {this.rogue(1)}} count={this.state.count}/>

        <Button title='ANOTHER Button' counter={() => {this.doubleIncrement(2)}} count={this.state.count2}/>
      </div>
    );
  }
}


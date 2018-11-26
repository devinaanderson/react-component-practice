import React, { Component } from 'react';

export default class Welcome extends Component {
  render(props) {
    return (
       <h1>Hello, {props.name}</h1>
    );
  }
}
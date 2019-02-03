import React, { Component } from 'react';

import './index.css';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props)

  }
  state = {
    displayValue: '0',
    previousValue: null,
    operation: null,
    waitingForNewValue: false
  }

  render() {
    return (
      <Calculator />
    )

  }
}

export default App;

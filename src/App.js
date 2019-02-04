import React, { Component } from 'react';
import {Number, Zero} from './components/number'
import './index.css';

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
      <body cz-shortcut-listen="true">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div className="calculator">
          <div className="row">
          <Number a='1' b='2' c='3'/>
          <Number a='4' b='5' c='6'/>
          <Number a='7' b='8' c='9'/>
          <Zero a='0'/>
          </div>
          </div>
          </div>
         
          </body>
    )
  }


}

export default App;

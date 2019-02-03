import React, { Component } from 'react';

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
          <div class="holder">
          <div class="calculator">
          <div class="row">
          <div class="col-12 inputview">0
          </div>
          <button class="button col-3">AC</button> 
          <button class="button col-3">%</button> 
          <button class="button col-3">±</button> 
          <button class="button col-3 orange">÷</button>
          <button class="button col-3">7</button> 
          <button class="button col-3">8</button> 
          <button class="button col-3">9</button> 
          <button class="button col-3 orange">x</button>
          <button class="button col-3">4</button> 
          <button class="button col-3">5</button> 
          <button class="button col-3">6</button> 
          <button class="button col-3 orange">-</button>
          <button class="button col-3">1</button> 
          <button class="button col-3">2</button> 
          <button class="button col-3">3</button> 
          <button class="button col-3 orange">+</button>
          <button class="button col-6">0</button> 
          <button class="button col-3">.</button> 
          <button class="button col-3 orange">=</button>
          </div></div>
          </div></div>
         
          </body>
    )
  }


}

export default App;

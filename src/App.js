import React, { Component } from 'react';
import { Number, Zero } from './components/number'
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

  waitingValue = () => {
    if (this.state.waitingForNewValue === true) {
      this.setState({previousValue:this.state.displayValue}) 
    }
  }

  updateState = (buttonValue) =>{
    if(parseInt(buttonValue)){
      if(this.state.waitingForNewValue === false){
        this.setState({displayValue: buttonValue}, ()=>{
          console.log(this.state)
        })
      }
    }
    
  }


  render() {
    return (


      <body cz-shortcut-listen="true">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div className="calculator">
            <div className="row">
            {/* {
              if(<waitingValue />){

              }
            } */}
              <Calculator updateState ={this.updateState}/>
            </div>
          </div>
        </div>

      </body>
    )
  }

}

export default App;

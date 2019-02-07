import React, { Component } from 'react';
import './index.css';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }

  }
  
  handleNumber = (buttonValue) => {
      this.state.displayValue = buttonValue;
      
  }

  handleOperator = (buttonValue) =>{
    console.log(buttonValue)
  }
  
  changeState = (buttonValue) =>{
    if(parseInt(buttonValue)) this.handleNumber(buttonValue)
    else this.handleOperator(buttonValue)
  }


  render() {
    return (
    <>
    <Calculator handleNumber = {this.handleNumber} changeState ={this.changeState}/>
    </>
    )
  }

}

export default App;

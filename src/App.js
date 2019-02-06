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
    console.log(buttonValue)
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
    <Calculator changeState ={this.changeState}/>
</>
     
    )
  }

}

export default App;

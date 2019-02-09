import React, { Component } from 'react';
import './index.css';
import Calculator from './components/calculator';

import {stateChngAdd} from './services/add'
import {stateChngSub} from './services/subtract'
import {stateChngMult} from './services/multiply'


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

  
    arithmetics = {
      '+':stateChngAdd,
      '-':stateChngSub,
      'x':stateChngMult,
    }
  
    handleOperation = (buttonValue) =>{
      if((buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' ) && this.state.waitingForNewValue === false){
        if((this.state.operation !== null) && this.state.operation !== "=" ) this.setState(this.arithmetics[this.state.operation](this.state.displayValue,this.state.previousValue), () => {
          this.setState({operation:buttonValue,waitingForNewValue:true},()=>{
            console.log('4',this.state)
          })
          
        })
        else if((this.state.operation === null) || this.state.operation === "=" ) this.setState({previousValue:this.state.displayValue},()=>{
          this.setState({operation:buttonValue,waitingForNewValue:true},()=>{
            console.log('5',this.state)
          })
        })
      }
  
      else if((buttonValue === '=') && this.state.waitingForNewValue === false){
        if((this.state.operation !== null) && this.state.operation !== "=") this.setState(this.arithmetics[this.state.operation](this.state.displayValue,this.state.previousValue), 
        () => {
          this.setState({operation:'='},()=>console.log('9',this.state))}) 
      }
    }
  
  
  changeState = (buttonValue) =>{
    if(parseInt(buttonValue)) this.handleNumber(buttonValue)
    else this.handleOperator(buttonValue)
  }


  render() {
     return <Calculator changeState={this.changeState} display={this.state.displayValue} />
    
  }

}

export default App;

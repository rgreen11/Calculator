import React, {Component} from 'react';
import './index.css';
import Calculator from './components/calculator';
import {stateChngAdd} from './services/add';
import {stateChngSub} from './services/subtract';
import {stateChngMult} from './services/multiply';
import {stateChngDiv} from './services/divide';
import {Display} from './components/number'

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
    console.log(this.state.displayValue)
    if (this.state.displayValue === '0' && this.state.waitingForNewValue === false) {
      // this.setState({displayValue:''})
      this.setState({
        displayValue: buttonValue
      })
    } else if (this.state.displayValue !== '0' && this.state.waitingForNewValue === false) {
      this.setState({
        displayValue: `${this.state.displayValue}${buttonValue}`
      })
    } else if (this.state.displayValue === buttonValue && this.state.waitingForNewValue === true) {
      this.setState({previousValue: this.displayValue})

    } else if(this.state.waitingForNewValue === true){
      this.setState({displayValue: buttonValue, waitingForNewValue: false})
    }
  }

  arithmetics = {
    '+':stateChngAdd,
    '-':stateChngSub,
    'x':stateChngMult,
    '÷':stateChngDiv
  }

  handleOperation = (buttonValue) =>{
    if((buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '÷') && this.state.waitingForNewValue === false){
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

    else if(buttonValue === 'AC' || buttonValue === 'C'){
      this.setState({
            displayValue: '0',       
            previousValue: null,     
            operation: null,         
            waitingForNewValue: false },()=>console.log('6',this.state))
    }

    else if((buttonValue === '%') && this.state.waitingForNewValue === false){
      this.setState({displayValue:(parseFloat(this.state.displayValue) / 100).toString()},()=>{
        console.log('7',this.state)
      })
    }

    else if(buttonValue === '±'){
      this.setState({displayValue:(parseFloat(this.state.displayValue) * -1).toString()},
      ()=>console.log('8',this.state))
    }

    else if((buttonValue === '=') && this.state.waitingForNewValue === false){
      if((this.state.operation !== null) && this.state.operation !== "=") this.setState(this.arithmetics[this.state.operation](this.state.displayValue,this.state.previousValue), 
      () => {
        this.setState({operation:'='},()=>console.log('9',this.state))}) 
    }

    else if((buttonValue === ".") && this.state.waitingForNewValue === false ){
      if (this.state.displayValue.toString().includes('.')) return;
      else this.setState({displayValue:this.state.displayValue.concat('.')})
    }
  }

changeState = (buttonValue) => {
  console.log(this.state)
  if (parseInt(buttonValue)) this.handleNumber(buttonValue)
  else this.handleOperation(buttonValue)
}

render() {
  let currentNum = this.state.displayValue;
  if (this.state.operation) return <div className = 'calculator' > < Display display = {currentNum}/> <Calculator handleNumber={this.handleNumber} display={currentNum} changeState={this.changeState} clearButton='C'/> </div>
  else return <div className = 'calculator' > < Display display = {currentNum}/><Calculator display={currentNum} changeState={this.changeState} handleNumber={this.handleNumber} clearButton='AC'/> </div>
  }
}

export default App;
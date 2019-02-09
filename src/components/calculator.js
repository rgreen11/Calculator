import React from 'react'
import {Number, Zero} from './number'
import Operator from './Operator'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = (props)=>{
    
    return(
    <>
        
        <div className='row'>
            <Operator changeState={props.changeState} operation={props.clearButton} />
            <Operator changeState={props.changeState} operation='%' />
            <Operator changeState={props.changeState} operation='±' />
            <Operator changeState={props.changeState} operation='÷' />
        </div>

        <div className='row'> 
            <Number changeState = {props.changeState} a='7' b='8' c='9'/>
            <Operator changeState={props.changeState} operation='x' />
        </div>

        <div className='row'> 
            <Number changeState = {props.changeState} a='4' b='5' c='6'/>
            <Operator changeState={props.changeState} operation='-' />
        </div>

        <div className='row'>
            <Number changeState = {props.changeState} a='1' b='2' c='3'/>
            <Operator changeState={props.changeState} operation='+' />
        </div>
        
        <div className='row'>
        
            <Zero display = {props.changeState} changeState={props.changeState} handleNumber={props.handleNumber} a='0'/>
            <Operator changeState={props.changeState} operation='.' />
            <Operator changeState={props.changeState} operation='=' />
        </div>
        </>
    )
}

export default Calculator;
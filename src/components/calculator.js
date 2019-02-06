import React from 'react'
import Number from './number'

const Calculator = (props)=>{
    
    return(
        <>
        <div className='row'><Number changeState = {props.changeState} a='1' b='2' c='3'/></div>
        <div className='row'> <Number changeState = {props.changeState} a='4' b='5' c='6'/></div>
        <div className='row'> <Number changeState = {props.changeState} a='7' b='8' c='9'/></div>
        
        <div className='row'><Number changeState = {props.changeState} a='0'/></div>
          
          </>
    )
}

export default Calculator;
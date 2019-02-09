import React from 'react'
import Number from './number'
import Operator from './Operator'

const Calculator = (props)=>{
    
    return(
        <>
        <div className="row">
                <div className="col col-12 button black"><p style={{ textAlign: "right" }}>{props.display}</p></div>
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
            <Number changeState = {props.changeState} a='0'/>
            <Operators changeState={props.changeState} operation='.' />
            <Operator changeState={props.changeState} operation='=' />
        </div>
          
          </>
    )
}

export default Calculator;
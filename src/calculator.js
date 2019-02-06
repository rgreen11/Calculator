import React from 'react'
import {Number, Zero} from './components/number'

const Calculator = (props)=>{
    
    return(
        <>
        <Number a='1' b='2' c='3'/>
          <Number a='4' b='5' c='6'/>
          <Number a='7' b='8' c='9'/>
          <Zero a='0'/>
          </>
    )
}

export default Calculator
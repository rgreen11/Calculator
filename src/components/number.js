import React from 'react';
import './calculator';



const Number = (props) =>{
    

    return (
          <>
          <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.a} className="button col-3">{props.a}</button> 
          <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.b} className="button col-3">{props.b}</button> 
          <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.c} className="button col-3">{props.c}</button> 
          </>
    )
}

const Zero = (props) =>{
   
        return <button onClick={(e) => props.handleNumber(e.currentTarget.value)} value = {props.a} className="button col-6">{props.a}</button> 
    
} 

const Display = (props) => {
   console.log('this is it',props.display)
    return(
        <div className='row'>
        <div className="col-12 inputview">{props.display}
        </div>
        </div>
    )
   
}


export {Number, Display, Zero};
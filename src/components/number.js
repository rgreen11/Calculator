import React from 'react';


const Number = (props) =>{
    if( props.a === '0'){
        return <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.a} className="button col-6">{props.a}</button> 
    }

    return (
          <>
          <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.a} className="button col-3">{props.a}</button> 
          <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.b} className="button col-3">{props.b}</button> 
          <button onClick={(e) => props.changeState(e.currentTarget.value)} value = {props.c} className="button col-3">{props.c}</button> 
          </>
    )
}




export default Number;
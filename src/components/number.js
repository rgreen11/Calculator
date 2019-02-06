import React from 'react'


const Number = (props) =>{
// updates the state
    return (
          <>
          <button onClick={(e) => props.updateState(e.currentTarget.value)} value = {props.a} className="button col-3">{props.a}</button> 
          <button onClick={(e) => props.updateState(e.currentTarget.value)} value = {props.b} className="button col-3">{props.b}</button> 
          <button onClick={(e) => props.updateState(e.currentTarget.value)} value = {props.c} className="button col-3">{props.c}</button> 
          </>
    )
}

const Zero = (props) =>{
    return <button onClick={(e) => props.updateState(e.currentTarget.value)} value = {props.a} className="button col-6">{props.a}</button> 
}


// const Opnum = (props) => {
//     if ()
// }

export {Number, Zero};
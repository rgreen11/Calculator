import React from 'react'


const Number = (props) =>{
    return (
          <>
          <button onClick={(e) => console.log(e)} className="button col-3">{props.a}</button> 
          <button onClick={(e) => console.log(e)} className="button col-3">{props.b}</button> 
          <button onClick={(e) => console.log(e)} className="button col-3">{props.c}</button> 
          </>
    )
}

const Zero = (props) =>{
    return <button onClick={(e) => console.log(e)} className="button col-6">{props.a}</button> 
}

export {Number, Zero};
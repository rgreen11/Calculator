import React from 'react'


const Number = (props) =>{
    return (
          <>
          <button class="button col-3">{props.a}</button> 
          <button class="button col-3">{props.b}</button> 
          <button class="button col-3">{props.c}</button> 
          </>
    )
}

export default Number;
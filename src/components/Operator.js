import React from 'react'

const Operators = props =>{
    return <React.Fragment>
        <button 
            onClick={e=>props.changeState(e.target.value)} 
            className="col col-3 button orange"value={props.operation}>{props.operation}</button>
    </React.Fragment>
}

export default Operators
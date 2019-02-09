const Add = (num1, num2) => (Number(num1) + Number(num2)).toString()

const stateChngAdd = (displayValue,previousValue) =>{
    const AddVal = Add(displayValue,previousValue)
    if(previousValue !== null){
        return {displayValue:AddVal,previousValue:AddVal}
    }
    else return {previousValue:displayValue}
}

module.exports = {
    stateChngAdd
}
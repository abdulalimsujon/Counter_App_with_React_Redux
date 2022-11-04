
// Actions


import { DECREMENT, INCREMENT, RESET } from "../Constant/CounterConstant"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const resetCounter = () => {
    return {
        type: RESET
    }
}


export default { incrementCounter, decrementCounter, resetCounter };
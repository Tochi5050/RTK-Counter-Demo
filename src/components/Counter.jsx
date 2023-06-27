import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementCount} from '../redux-store/counter-slice'

const Counter = () => {
const count = useSelector((state) => state.counter.count)

const [incrementAction, setIncrementAction] = useState(0)

const dispatch = useDispatch()
 
const handleClick = () => {
    dispatch(increment())
}

const handleDecrementClick = () => {
    dispatch(decrement())
}

const resetAll = () => {
    setIncrementAction(0)
    dispatch(reset())
}



const handleIncrement = () => {
    setIncrementAction(incrementAction)
    dispatch(incrementCount(Number(incrementAction)))
}



  return (
    <div>
       <p>{count}</p>
       <button onClick={handleClick}>Increase count</button>
       <button onClick={handleDecrementClick}>Decrease count</button>
       <input
        type = 'text' 
        value = {incrementAction}
        onChange = {e => setIncrementAction(e.target.value)}
       />
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={resetAll}>Reset</button>
    </div>
  )
}

export default Counter
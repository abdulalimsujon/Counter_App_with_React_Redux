//intial state 
// actions 
// reducer




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../Services/Actions/counterAction';



const Counter = () => {

    const count = useSelector(state => state.count);
    const disPatch = useDispatch();


    const hundleIncrement = () => {

        disPatch(incrementCounter());


    }

    const hundleDecrement = () => {
        disPatch(decrementCounter())

    }
    return (
        <div>

            <h1>Counter App</h1>
            <h3>Count : {count} </h3>
            <button onClick={hundleIncrement}>Increment</button>
            <button onClick={hundleDecrement}>Decrement</button>

        </div>
    );
};

export default Counter;


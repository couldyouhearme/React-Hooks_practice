import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 }
        case 'sub':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 10 })


    const add = () => {
        dispatch({ type: 'add' })
    }

    const sub = () => {
        dispatch({ type: 'sub' })
    }

    return (
        <>
            <button onClick={sub}>-</button>
            <span>{state.count}</span>
            <button onClick={add}>+</button>
        </>
    )
}

export default Counter
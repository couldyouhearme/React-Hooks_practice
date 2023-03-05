import React, { useState, useReducer } from 'react'

const ACTIONS = {
    ADD: 'add',
    SUB: 'sub',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return { count: state.count + 1 }
        case ACTIONS.SUB:
            return { count: state.count - 1 }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 10 })


    const add = () => {
        dispatch({ type: ACTIONS.ADD })
    }

    const sub = () => {
        dispatch({ type: ACTIONS.SUB })
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
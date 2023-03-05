import React, { useState, useReducer } from 'react'
import reducer from './reducer'
import ACTIONS from './actions'
import Todo from './Todo'

// user case 2: useReducer with payload - Todos List
const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='add to-do here...'
                />
            </form>
            <div>
                {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
            </div>
        </>
    )
}

export default Todos

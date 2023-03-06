// user case 2: refer to HTML elements in page, such as 'input'
// user case 3: store prev value
import React, { useState, useEffect, useRef } from 'react'

const Focus = () => {
    const [name, setName] = useState('')
    const inputRef = useRef('')
    const prevInputRef = useRef('')

    const getFocus = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        prevInputRef.current = name
    }, [name])

    return (
        <div>
            <input ref={inputRef} type='text' value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}, my previous name is {prevInputRef.current}</div>
            <button onClick={getFocus}>Focus</button>
        </div>
    )
}

export default Focus
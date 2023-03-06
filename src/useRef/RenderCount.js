// user case 1: 
// similar to 'state' - store values across renders 
// does NOT cause re-render as changes of 'state' does
import React, { useState, useEffect, useRef } from 'react'

const RenderCount = () => {
    const [name, setName] = useState('')

    const renderCountRef = useRef(1)

    useEffect(() => {
        renderCountRef.current = renderCountRef.current + 1
    })

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCountRef.current} times!</div>
        </div>
    )
}

export default RenderCount
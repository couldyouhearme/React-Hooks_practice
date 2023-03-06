import React, { useState, useEffect, useRef } from 'react'

const RenderCount = () => {
    const [name, setName] = useState('')

    // useRef: does NOT cause re-render as 'state' does
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
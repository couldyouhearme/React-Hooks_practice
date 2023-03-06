import React from 'react'
import useLocalStorage from './useLocalStorage'

const Storage = () => {
    const [name, setName] = useLocalStorage('')

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default Storage

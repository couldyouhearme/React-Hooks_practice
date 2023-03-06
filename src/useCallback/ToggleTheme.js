import React, { useState, useCallback } from 'react'
import List from './List'

const ToggleTheme = () => {
    const [num, setNum] = useState(1)
    const [dark, setDark] = useState(false)

    // useCallback return the entire function
    // useMemo only return the return value of the function
    const getItems = useCallback((extra) => {
        return [num + extra, num + 1 + extra, num + 2 + extra]
    }, [num])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    }

    return (
        <div style={theme}>
            <input type='number' value={num} onChange={e => setNum(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )



}

export default ToggleTheme
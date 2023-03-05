// useMemo: two user cases
import React, { useState, useEffect, useMemo } from 'react'

export default function ThemeChange_useMemo() {
    const [num, setNum] = useState(0)
    const [dark, setDark] = useState(false)

    function slowFn(num) {
        console.log('calling slow funciton!')
        for (let i = 0; i < 100000000; i++) { }
        return num * 2
    }
    // useMemo case 1: wrap a function
    //const doubleNumber = slowFn(num) 
    const doubleNumber = useMemo(() => {
        return slowFn(num)
    }, [num])

    // useMemo case 2: wrap a object
    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black',
    // }
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    }, [dark])

    useEffect(() => {
        console.log('new themeStyles obj created!')
    }, [themeStyles])

    return (
        <>
            <input type='number' value={num} onChange={e => setNum(parseInt(e.target.value))} />
            <br />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

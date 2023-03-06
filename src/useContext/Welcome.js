import React, { useState, createContext, useContext } from 'react'

import './Welcome.css'

const ThemeContext = createContext(null)

const Welcome = () => {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={theme}>
            <Form />
            <label>
                <input
                    type='checkbox'
                    checked={theme === 'dark'}
                    onClick={e => setTheme(e.target.checked ? 'dark' : 'light')}
                />
                Use dark mode
            </label>
        </ThemeContext.Provider>
    )
}

export default Welcome

const Form = () => {
    return (
        <Panel title='Welcome'>
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    )
}

const Panel = ({ title, children }) => {
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

const Button = ({ children }) => {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme
    return (
        <button className={className}>
            {children}
        </button>
    )
}
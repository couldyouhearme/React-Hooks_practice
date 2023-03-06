import React, { useState, useEffect } from 'react'

const List = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(100))
        console.log('update items')
    }, [getItems])

    return (
        <div>
            {items.map(item => <div key={item}>{item}</div>)}
        </div>
    )
}

export default List
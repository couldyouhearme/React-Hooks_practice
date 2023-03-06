import { useState } from 'react'

const useLocalStorage = (initVal) => {
    const [val, setVal] = useState(initVal)

    return [val, setVal]
}

export default useLocalStorage
import { useState } from 'react'

const useInput = (initialState) => {
    const [val, setVa] = useState(initialState);

    const handlertChange = (event) => {
        const { value } = event.target
        setVa(value)
    }
    return [val, handlertChange]
}

export default useInput
import { useState } from 'react'

const useInput = (initialState) => {
    const [val, setVa] = useState(initialState);

    const handlertChange = (event) => {
        const { value } = event.target
        setVa(value)
    }

    const handlerInitialState = (value)=>{
        setVa(value)
    }
    return [val, handlertChange, handlerInitialState]
}

export default useInput
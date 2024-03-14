import React, { useEffect, useRef, useState } from 'react'

const useDebounce = (value, delay) => {
    const [debounceValue,setDebounceValue] = useState(value)
    const ref = useRef(null)

    useEffect(() => {
        return () => {
            if (ref.current) {
                clearTimeout(ref.current)
            }
        }
    }, [])

    const debounceCB = (value) => {
        if (ref.current) {
            clearTimeout(ref.current)
        }

        ref.current = setTimeout(() => setDebounceValue(value), delay)
    }
    return [debounceValue,debounceCB]
}

export default useDebounce
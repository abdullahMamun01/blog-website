import React, { useState } from 'react'

const useImageSrc = (initialValue) => {
    const [imageSrc, setImageSrc] = useState(initialValue)

     //handle image for selected image
    const handleFileChange = (event) => {
        const file = event.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {

                setImageSrc(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }
    return {
        imageSrc,
        handleFileChange
    }
}

export default useImageSrc
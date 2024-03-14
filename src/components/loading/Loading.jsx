import React from 'react'
import Spinner from '../../assets/icons/spinner.svg'
const Loading = () => {
    return (
        <div className=''>
            <img className='w-[50px] h-[50px] animate-spin mx-auto' src={Spinner} alt="" />
        </div>
    )
}

export default Loading
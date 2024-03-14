import React from 'react'

const Avatar = ({ author }) => {
    const {firstName , avatar} = author
    
    let renderAvatar;
    if (avatar) {
        renderAvatar = <img className='rounded-full' src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${avatar}`} alt="" />
    } else {
        renderAvatar = <span className="">{firstName[0]}</span>
    }
    return (
        <div className="avater-img bg-indigo-600 text-white">

            {renderAvatar}
        </div>
    )
}

export default Avatar
import React from 'react'
import ProfileImage from './ProfileImage'

const ProfileInfo = ({firstName,lastName,email}) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold text-white lg:text-[28px]">{firstName} {lastName}</h3>
            <p className="leading-[231%] lg:text-lg">{email}</p>
        </div>
    )
}

export default ProfileInfo
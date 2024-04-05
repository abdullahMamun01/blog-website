import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../auth/Logout'


const AvatarDropdown = () => {

    return (
        <div className="absolute right-0 top-10  py-3">

            <div className="action-modal-container">

                <button className="action-menu-item hover:text-lwsGreen">
                    <Link to="/me">

                        Profile
                    </Link>
                    {/* <img src={EditIcon} alt="Edit" /> */}
                </button>


                <Logout />

            </div>
        </div>
    )
}

export default AvatarDropdown
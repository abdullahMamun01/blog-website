import React from 'react'
import EditIcon from '../ui/EditIcon'
import useAuthContext from '../../hooks/useAuthContext'
import useBlogContext from '../../hooks/useBlogContext'
const ProfileImage = ({avatar, firstName ,isMe }) => {
    const {state,dispatch} = useBlogContext()
    // const {updateProfileModal} = state
    //OPEN_UPDATE_PROFILE_MODAL
    const {auth} = useAuthContext()
    const onEdit  =() => {

        dispatch({type: 'OPEN_UPDATE_PROFILE_MODAL' , payload:auth.user.id})
    }
    return (
        <div
            className="relative mb-8 max-h-[180px] mx-auto max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
        >
            <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">

                {
                    avatar ? <img className='rounded-full' src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${avatar}`} alt={firstName} /> :
                        <spa>{firstName[0]}</spa>
                }
            </div>

            {isMe && <button
            onClick={onEdit}
                className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
            >
                <EditIcon />
            </button>}
        </div>
    )
}

export default ProfileImage
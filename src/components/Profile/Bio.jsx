import React, { useState } from 'react'
import EditIcon from '../ui/EditIcon'
import useModal from '../../hooks/useModal'
import useProfileMutation from '../../hooks/useProfileMutation'
import useAuthContext from '../../hooks/useAuthContext'

const Bio = ({ bio,isMe }) => {
    const { isOpen, openModal, closeModal } = useModal()
    const [bioInfo, setBioInfo] = useState('')
    const  {auth} = useAuthContext()
    const profileMutation = isMe && useProfileMutation()
 
    const handleBio = () => {
       profileMutation.updateBio({ bio: bioInfo })
        setBioInfo("")
        closeModal()
    }

    return (
        <>
            <div className="mt-4 flex items-start gap-2 lg:mt-6">
                <div className="flex-1">
                    {
                        bio ?
                            <p className="leading-[188%] text-gray-400 lg:text-lg">
                                {bio}
                            </p>
                            :
                            <div className='text-sky-600 font-bold'>
                                <p>No bio found.</p>
                                <p>Add or update your bio.</p>
                            </div>
                    }

                </div>

                {(!isOpen && isMe) && <button onClick={openModal} className="flex-center h-7 w-7 rounded-full">
                    <EditIcon />
                </button>}

            </div>
            {(isOpen && isMe) && <div className=' '>

                <textarea onChange={(e) => setBioInfo(e.target.value)} value={bioInfo} id="message" rows="6" cols="55" className="block p-2.5 w-full my-2 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <button onClick={handleBio} type="submit" className="inline-flex items-center px-5 py-2.5 my-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    update bio
                </button>
            </div>

            }
            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </>
    )
}

export default Bio
import React, { useState } from 'react'

import DotsIcon from '../../assets/icons/3dots.svg'
import EditIcon from '../../assets/icons/edit.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import { useLocation } from 'react-router-dom'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import useModal from '../../hooks/useModal'
import useBlogContext from '../../hooks/useBlogContext'

const ActionMenuModal = ({ blog }) => {
    //modal hooks
    const { isOpen, openModal, closeModal } = useModal()
    const [toggle, setToggle] = useState(false)
    const { dispatch, state } = useBlogContext()

    const handleToggle = () => {
        setToggle(!toggle)

    }

    const handleEditBtn = () => {
        dispatch({type: 'OPEN_EDIT_MODAL' , payload: blog})
    }

    //delete blog
    const onDelete = () => {
        openModal()
    }
    return (
        <div className="absolute right-0 top-0  py-3">
            {isOpen && <ConfirmDeleteModal closeModal={closeModal} id={blog.id} />}

            <button onClick={handleToggle}>
                <img
                    src={DotsIcon}
                    alt="3dots of Action"
                />
            </button>

            {toggle && <div className="action-modal-container">
                <button onClick={handleEditBtn} className="action-menu-item hover:text-lwsGreen">
                    <img src={EditIcon} alt="Edit" />
                    Edit
                </button>
                <button onClick={onDelete} className="action-menu-item hover:text-red-500">
                    <img src={DeleteIcon} alt="Delete" />
                    Delete
                </button>
            </div>}
        </div>
    )
}

export default ActionMenuModal
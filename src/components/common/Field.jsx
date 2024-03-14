import React from 'react'

const Field = ({ label, htmlFor, children, error }) => {
    const id = htmlFor || getChildId(children)
    return (
        <div>
            {label && <label htmlFor={id} className="block mb-2 my-1">{label}</label>}
            {children}
            {error && <span className='text-red-700 my-2'>{error.message}</span>}
        </div>
    )
}

export default Field


const getChildId = (children) => {
    const child = React.Children.only(children);

    if ("id" in child?.props) {
        return child.props.id;
    }
};
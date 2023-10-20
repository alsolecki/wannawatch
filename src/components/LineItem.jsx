import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleDelete }) => {

    return (
        <li 
            className="movie-card">
            <label>{item.title}</label>
            <FaTrashAlt
                role="button" 
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
   
}

export default LineItem
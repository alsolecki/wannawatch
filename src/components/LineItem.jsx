import React from 'react'
import { FaTrashAlt} from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li 
            className="movie-card">
            <input type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
            />
            <label
                style={(item.checked) ? {textDecoration : 'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.title}</label>
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
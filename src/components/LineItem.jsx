import React from 'react'
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleDelete }) => {

    const deleted = () => console.log('deleted');

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: item.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }


    return (
        <li className="movie-card" ref={setNodeRef} style={style} {...attributes} {...listeners}>      
                <label>{item.title}</label>
                <FaTrashAlt
                    className="trashcan"
                    role="button" 
                    onClick={() => handleDelete(item.id)}
                    // onClick={deleted()} 
                    tabIndex="0"
                    aria-label={`Delete ${item.item}`}
                />
        </li>
    )
}

export default LineItem
import React from 'react'
import LineItem from './LineItem.jsx'

const MovieList = ({ items, handleCheck, handleDelete }) => {
  return (
            <ul>
                {items.map((item)=>(
                    <LineItem 
                        key={item.id}
                        item={item}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
  )
}

export default MovieList
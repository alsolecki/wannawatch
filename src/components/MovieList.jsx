import React from 'react'
import LineItem from './LineItem.jsx'

const MovieList = ({ items, handleDelete }) => {
  return (
            <ul>
                {items.map((item)=>(
                    <LineItem 
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
  )
}

export default MovieList
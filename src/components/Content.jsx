import React from 'react'
import MovieList from './MovieList.jsx'

const Content = ({ items, handleDelete }) => {

  return (
    <div>
        {items.length ? (
            <MovieList 
                items={items}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={ {marginTop: '2rem'} }>List is empty.</p>
        )}
    </div>
  )
}

export default Content
import React from 'react'
import MovieList from './MovieList.jsx'

const Content = ({ items, handleDelete }) => {

  return (
    <div className="movie-list">
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
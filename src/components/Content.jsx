import React, { useState } from 'react'

import MovieList from './MovieList.jsx'

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <div>
        {items.length ? (
            <MovieList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={ {marginTop: '2rem'} }>List is empty.</p>
        )}
    </div>
  )
}

export default Content
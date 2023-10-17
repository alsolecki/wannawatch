import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      <p>{length} {length === 1 ? "movie" : "movies"} in the list </p>
    </footer>
  )
}

export default Footer
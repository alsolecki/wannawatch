import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddMovie = ({ newMovie, setNewMovie, handleSubmit }) => {

    const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor='addMovie'>Add Movie</label>
        <input
            autoFocus
            ref={inputRef}
            id="AddMovie"
            type="text"
            placeholder="Add a movie..."
            autoComplete="one-time-code"
            required
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add Movie"
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddMovie
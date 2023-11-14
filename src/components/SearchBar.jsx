import React, { useRef } from 'react';
import { FaSearch, FaPlus } from "react-icons/fa";

const SearchBar = ({ setResults, handleSubmit, input, setInput }) => {
    
    const inputRef = useRef();

    const fetchData = (value) => {
        const response = fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=96a918ae&s=${value}`);
        Promise.resolve(response)
            .then((response) => response.json())
            .then((json) => {
                let searchResults = json.Search
                const results = searchResults.filter((item) => {
                    return (
                        value.length >= 4 && item.Title
                    );
                });
                setResults(results)
            });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className="input-wrapper">
            <div className="search-box">
                <FaSearch id="search-icon" />
                <input
                    autoFocus
                    ref={inputRef}
                    placeholder="Type to search..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>

            <button
                type="submit"
                aria-label="Add Movie"
                onClick={() => handleSubmit(input)}
            >
                <FaPlus />
            </button>

        </div>
    )
}

export default SearchBar
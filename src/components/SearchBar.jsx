import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("");
    
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
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            
        </div>
    )
}

export default SearchBar
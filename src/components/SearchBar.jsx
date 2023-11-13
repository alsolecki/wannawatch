import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("");
    
    // const result = fetch("http://localhost:8080/https://rotten-tomatoes-api.ue.r.appspot.com/search/The%20Godfather").catch(console.error);
    
    // result.setHeader("Access-Control-Allow-Origin", "*");
    const fetchData = (value) => {
        const response = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=96a918ae&s=${value}`);
        Promise.resolve(response)
            .then((response) => response.json())
            .then((json) => {
                let searchResults = json.Search
                // console.log(searchResults);
                const results = searchResults.filter((item) => {
                    return (
                        value && item.Title
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
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("");
    
    // const result = fetch("http://localhost:8080/https://rotten-tomatoes-api.ue.r.appspot.com/search/The%20Godfather").catch(console.error);
    
    // result.setHeader("Access-Control-Allow-Origin", "*");
    const fetchData = async (value) => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
        const response = await fetch("https://rotten-tomatoes-api.ue.r.appspot.com/search/The%20Godfather").then(response => response.json().setHeader("Access-Control-Allow-Origin", "*"));
        // const response = await fetch("http://localhost:8080/https://rotten-tomatoes-api.ue.r.appspot.com/search/The%20Godfather");
        // const result = await response.json();
        console.log("hi");
            // .then((response) => response.json().setHeader("Access-Control-Allow-Origin", "*"))
            // .then((json) => {
            //     const results = json.filter((user) => {
            //         return (
            //             value && 
            //             user && 
            //             user.name && 
            //             user.username.toLowerCase().includes(value)
            //         );
            //     });
            //     {console.log(results)}
            //     setResults(results)
            // });
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
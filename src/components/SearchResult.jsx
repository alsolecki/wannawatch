import React from 'react'

const SearchResult = ({ result, handleResultSelection }) => {
    return (
        <div 
            className="search-result" 
            onClick={(e)=> handleResultSelection(e.target.innerText)}>
            {result}
        </div>
    )
}

export default SearchResult
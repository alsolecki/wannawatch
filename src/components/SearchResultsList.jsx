import React from 'react'
import SearchResult from './SearchResult.jsx';

const SearchResultsList = ({ results, handleResultSelection }) => {

    return (
        <div className="results-list">
         
            {results.map((result, id) => {
                return <SearchResult 
                            result={result.Title} 
                            key={id} 
                            handleResultSelection={handleResultSelection}
                        />
            })}
        </div>
    )
};

export default SearchResultsList
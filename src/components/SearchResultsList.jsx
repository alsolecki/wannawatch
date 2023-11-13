import React from 'react'
import SearchResult from './SearchResult.jsx';

const SearchResultsList = ({ results }) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <SearchResult result={result.Title} key={id} />
            })}
        </div>
    )

};

export default SearchResultsList
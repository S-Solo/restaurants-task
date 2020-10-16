import React from 'react';

import NoResultsIcon from 'icons/NoResultsIcon';

import "./NoResults.scss";

const NoResults: React.FC = () => {
    return (
        <div className="app-no-results">
            <span><NoResultsIcon /></span>
            <span className="app-no-results__text">No Results...</span>
        </div>
    );
}

export default NoResults;
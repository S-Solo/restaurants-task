import React from 'react';

import RatingIcon from 'icons/RatingIcon';

import "./RatingFilter.scss";

interface IRatingFilterProps {
    currentMinimumRating?: number;
    onChange: (minRating: number) => void;
};

const RatingFilter: React.FC<IRatingFilterProps> = ({
    currentMinimumRating = 1,
    onChange,
}) => {
    return (
        <div className="app-rating-filter">
            <span className="app-rating-filter__title">Minimum Rating</span>
            <div className="app-rating-filter__icons-container">
                {Array(5).fill(0).map((_, idx) => (
                    <div
                        className={`app-rating-filter__icons-container__icon${idx < currentMinimumRating ? ' app-rating-filter__icons-container__icon--selected' : ''}`}
                        onClick={() => { onChange(idx + 1) }}
                        key={idx}
                    >
                        <RatingIcon />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RatingFilter;
import RatingIcon from 'icons/RatingIcon';
import React from 'react';

import "./MapListItem.scss";

interface IMapListItemProps {
    title: string;
    description: string;
    rating: number;
    onClick?: () => void;
};

const MapListItem: React.FC<IMapListItemProps> = ({
    title,
    description,
    rating,
    onClick = () => {}
}) => {
    return (
        <div className="map-list-item" onClick={onClick}>
            <div className="map-list-item__row-1">
                <span className="map-list-item__row-1__title">{title}</span>
                <div className="map-list-item__row-1__rating-container">
                    <span className="map-list-item__row-1__rating-container__icon"><RatingIcon /></span>
                    <span>{rating}</span>
                </div>
            </div>
            <span className="map-list-item__desc">{description}</span>
        </div>
    );
}

export default MapListItem;
import React from 'react';
import { Popup } from 'react-map-gl';

import RatingIcon from 'icons/RatingIcon';

import "./MapPopup.scss";

interface IMapPopupProps {
    lat: number;
    long: number;
    title: string;
    description: string;
    onClose: () => void;
    rating?: number;
};

const MapPopup: React.FC<IMapPopupProps> = ({
    lat,
    long,
    title,
    description,
    onClose,
    rating = null,
}) => {
    return (
        <Popup latitude={lat} longitude={long} onClose={onClose}>
            <div className="app-map-popup">
                <span className="app-map-popup__title">{title}</span>
                <span className="app-map-popup__description">{description}</span>
                {rating && (
                    <div className="app-map-popup__rating-container">
                        <span className="app-map-popup__rating-container__icon-container"><RatingIcon /></span>
                        <span className="app-map-popup__rating-container__text">{rating}</span>
                    </div>
                )}
            </div>
        </Popup>
    );
}

export default MapPopup;
import React from 'react';
import { Marker } from 'react-map-gl';

import "./MapMarker.scss";

interface IMapMarkerProps {
    lat: number;
    long: number;
    title: string;
    MapIcon: React.FC;
    markerKey: string | number;
    onClick?: () => void;
};

const MapMarker: React.FC<IMapMarkerProps> = ({
    lat,
    long,
    title,
    MapIcon,
    markerKey,
    onClick = () => { },
}) => {
    return (
        <Marker latitude={lat} longitude={long} key={markerKey}>
            <div className="app-map-marker" onClick={onClick}>
                <MapIcon />
                <span className="app-map-marker__title">{title}</span>
            </div>
        </Marker>
    );
}

export default MapMarker;
import React, { useState } from 'react';
import ReactGlMap from 'react-map-gl';

import RestaurantsList from 'containers/RestaruantsList/RestaurantsList';
import MapMarker from 'components/MapMarker/MapMarker';
import MapPopup from 'components/MapPopup/MapPopup';
import RestaurantIcon from 'icons/RestaurantIcon';
import { restaurantsData, IRestaurant } from 'data-mockup/restaurants.mockup';

import './MapBox.scss';

const initialViewPort = {
    width: '100%',
    height: '100%',
    latitude: 40.1818613,
    longitude: 44.5147676,
    zoom: 13
}

const MapBox: React.FC = () => {
    const [viewport, setViewport] = useState(initialViewPort);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);
    const [selectedRestaurant, setSelectedRestaurant] = useState<IRestaurant | null>(null);

    const handleViewPortChange = (newViewport: any) => {
        setViewport(newViewport);
    }

    const handleMarkerClick = (item: IRestaurant) => {
        setSelectedRestaurant(item);
    }

    const handleFocusToItem = (item: IRestaurant) => {
        setViewport({ ...viewport, latitude: item.coordinates[0], longitude: item.coordinates[1], zoom: 17 });
        setSelectedRestaurant(item);
    }

    const setFilterParams = ({ minRating, query }: { minRating: number, query: string }) => {
        if (selectedRestaurant) {
            setSelectedRestaurant(null);
        }
        setFilteredRestaurants(restaurantsData.filter((el: IRestaurant) => {
            if (!query) {
                return el.rating >= minRating;
            }
            return el.rating >= minRating && el.title.toLocaleLowerCase().includes(query.toLowerCase());
        }));
    }

    return (
        <div className="app-map">
            <RestaurantsList
                filteredRestaurants={filteredRestaurants}
                handleFocusToItem={handleFocusToItem}
                setFilterParams={setFilterParams}
            />
            <ReactGlMap
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/sokrat-poghosyan/ckg9r53qf0x8w19s47bot59ue"
                onViewportChange={handleViewPortChange}
                doubleClickZoom={false}
            >
                {filteredRestaurants.map(item => {
                    return (
                        <MapMarker
                            key={item.id}
                            lat={item.coordinates[0]}
                            long={item.coordinates[1]}
                            MapIcon={RestaurantIcon}
                            title={item.title}
                            markerKey={item.id}
                            onClick={() => handleMarkerClick(item)}
                        />
                    )
                })}
                {selectedRestaurant && (
                    <MapPopup
                        lat={selectedRestaurant.coordinates[0]}
                        long={selectedRestaurant.coordinates[1]}
                        onClose={() => setSelectedRestaurant(null)}
                        title={selectedRestaurant.title}
                        description={selectedRestaurant.description}
                        rating={selectedRestaurant.rating}
                    />
                )}
            </ReactGlMap>
        </div>
    );
}

export default MapBox;
import React, { useEffect, useRef, useState } from 'react';

import InputField from 'components/InputField/InputField';
import RatingFilter from 'components/RatingFilter/RatingFilter';
import MapListItem from 'components/MapListItem/MapListItem';
import SearchIcon from 'icons/SearchIcon';
import { IRestaurant } from 'data-mockup/restaurants.mockup';

import "./RestaurantsList.scss";
import NoResultsIcon from 'icons/NoResultsIcon';
import Heading from 'components/Heading/Heading';

interface FilterOptions {
    minRating: number;
    query: string;
}

interface IRestaurantsListProps {
    filteredRestaurants: IRestaurant[];
    handleFocusToItem: (item: IRestaurant) => void;
    setFilterParams: ({ minRating, query }: FilterOptions) => void;
};

const RestaurantsList: React.FC<IRestaurantsListProps> = ({
    filteredRestaurants,
    handleFocusToItem,
    setFilterParams,
}) => {
    const [inputValue, setInputValue] = useState('');
    const [ratingFilter, setRatingFilter] = useState(1);
    const timeout = useRef<any>(null);

    const handleInputChange = (val: string) => {
        setInputValue(val);
        handleFilterChange({ minRating: ratingFilter, query: val.trim() });
    }

    const handleFilterChange = ({ minRating, query }: FilterOptions) => {
        if (timeout.current) {
            window.clearTimeout(timeout.current);
        }
        timeout.current = window.setTimeout(() => {
            setFilterParams({ minRating, query });
        }, 300);
    }

    const ratingChangeHandler = (newRatingFilter: number) => {
        setRatingFilter(newRatingFilter);
        handleFilterChange({ minRating: newRatingFilter, query: inputValue });
    }

    const itemClickedHandler = (item: IRestaurant) => {
        handleFocusToItem(item);
    }

    const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(() => {
        return () => {
            if (timeout.current) {
                window.clearTimeout(timeout.current);
            }
        }
    }, []);

    return (
        <div className="restaurants-list" onClick={handleParentClick}>
            <Heading className="restaurants-list__heading">Restaurants</Heading>
            <InputField
                value={inputValue}
                onChange={handleInputChange}
                RightIcon={SearchIcon}
                placeholder='Search...'
            />
            <RatingFilter
                currentMinimumRating={ratingFilter}
                onChange={ratingChangeHandler}
            />
            {filteredRestaurants.length > 0 ?
                filteredRestaurants.map(item => (
                    <MapListItem
                        title={item.title}
                        description={item.description}
                        rating={item.rating}
                        key={item.id}
                        onClick={() => { itemClickedHandler(item); }}
                    />
                )) : (
                    <div className="restaurants-list__no-results">
                        <span><NoResultsIcon /></span>
                        <span className="restaurants-list__no-results__text">No Results...</span>
                    </div>
                )}
        </div>
    );
}

export default RestaurantsList;
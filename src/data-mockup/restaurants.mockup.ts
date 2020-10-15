export interface IRestaurant {
    id: number;
    title: string;
    rating: number;
    coordinates: [number, number]
    description: string;
}

export const restaurantsData: IRestaurant[] = [
    {
        id: 1,
        title: 'Karas',
        rating: 4.3,
        coordinates: [40.1852511, 44.5165512],
        description: 'Armenian food',
    },
    {
        id: 2,
        title: 'Healthy food',
        rating: 3.8,
        coordinates: [40.1857711, 44.5167812],
        description: 'Healthy food'
    },
    {
        id: 3,
        title: 'KFC',
        rating: 4.7,
        coordinates: [40.2827011, 44.6264512],
        description: 'Fast Food'
    },
    {
        id: 4,
        title: 'Bad Food',
        rating: 2.2,
        coordinates: [40.1867711, 44.5166812],
        description: 'worst rating'
    },
    {
        id: 5,
        title: 'Best Food',
        rating: 4.9,
        coordinates: [40.1662100, 44.5166812],
        description: 'best rating'
    },
]
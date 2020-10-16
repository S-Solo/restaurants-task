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
    {
        id: 6,
        title: 'Darget',
        rating: 4.7,
        coordinates: [40.1835237, 44.5082924],
        description: 'beer house'
    },
    {
        id: 7,
        title: 'Dragon Garden',
        rating: 4.3,
        coordinates: [40.1837604, 44.5080095],
        description: 'Chinese Restaurant'
    },
    {
        id: 8,
        title: 'Sherep Restaurant',
        rating: 4.7,
        coordinates: [40.178295, 44.5109929],
        description: 'Restaurant'
    },
    {
        id: 9,
        title: 'Smoking Chef',
        rating: 4.5,
        coordinates: [40.1857834, 44.5078052],
        description: 'Restaurant'
    },
    {
        id: 10,
        title: 'La Piazza',
        rating: 4.3,
        coordinates: [40.1818613, 44.5147676],
        description: 'Italian Restaurant'
    },
]
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
]
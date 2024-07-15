
// type of Rent object (as shown in json)
interface Rent {
    id: string;
    title: string;
    cover: string;
    pictures: string[],
    location: string,
    tags: string[],
    rating: number,
    host: {
        name: string,
        picture: string
    },
    description: string,
    equipments: string[]
}
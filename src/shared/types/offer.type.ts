// import { User } from './user.type.js';

export type Cities = 'Paris' | 'Cologne' | 'Hamburg' | 'Dusseldorf' | 'Brussels' | 'Amsterdam';

export type Coordinates = {
   latatude: number,
   longitude: number,
}

export type Offer = {
    name: string;
    describe: string;
    createData: Date;
    city: Cities;
    previewImage: string,
    images: string[];
    premium: boolean;
    favorite: boolean;
    rating: number;
    bedrooms: number;
    guests: number;
    amenities: string[];
    autor: string;
    commentsCount: number;
    coordinates: Coordinates;
}

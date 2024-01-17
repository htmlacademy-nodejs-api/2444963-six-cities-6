// import { User } from './user.type.js';

export type Cities = 'Paris' | 'Cologne' | 'Hamburg' | 'Dusseldorf' | 'Brussels' | 'Amsterdam';

export type Coordinates = {
   latatude: number,
   longitude: number,
}

export type Offer = {
    name: string;
    describe: string;
    create_data: Date;
    city: Cities;
    preview_image: string,
    images:  string[];
    premium: boolean;
    favorite: boolean;
    rating: number;
    bedrooms: number;
    guests: number;
    amenities: string[];
    autor: string;
    comments_count: number;
    coordinates: Coordinates;
}

import { Offer, Cities } from '../types/offer.type.js';

export function createOffer(offerData: string): Offer {
  const [
    name,
    describe,
    createData,
    city,
    previewImage,
    images,
    premium,
    favorite,
    rating,
    bedrooms,
    guests,
    amenities,
    autor,
    commentsCount,
    coordinates,
  ] = offerData.replace('\n', '').split('\t');

  const [latatude, longitude] = coordinates.split(',');

  return {
    name,
    describe,
    createData: new Date(createData),
    city: city as Cities,
    previewImage,
    images: images.split('|'),
    premium: !!premium,
    favorite: !!favorite,
    rating: Number(rating),
    bedrooms: Number(bedrooms),
    guests: Number(guests),
    amenities: amenities.split('|'),
    autor,
    commentsCount: Number(commentsCount),
    coordinates: {
      latatude: Number(latatude),
      longitude: Number(longitude),
    },
  };
}

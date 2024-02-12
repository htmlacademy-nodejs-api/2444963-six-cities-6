import { Offer, Cities } from '../types/offer.type.js';
import { User } from '../types/user.type.js';

export function createOffer(offerData: string): Offer {
  const [
    name,
    description,
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
    commentsCount,
    coordinates,
  ] = offerData.replace('\n', '').split('\t');

  const [latatude, longitude] = coordinates.split(',');

  const autorC: User = {
    name: 'Alb',
    email: 'em@em.ru',
    avatarPath: 'avata/path',
    typeUser: 'обычный'
  };
  return {
    name,
    description,
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
    autor: autorC,
    commentsCount: commentsCount,
    coordinates: {
      latatude: Number(latatude),
      longitude: Number(longitude),
    },
  };
}

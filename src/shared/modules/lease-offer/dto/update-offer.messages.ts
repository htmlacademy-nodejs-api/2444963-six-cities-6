export const CreateUpdateOfferMessage = {
  name: {
    minLength: 'minimum title length is 10',
    maxLength: 'maximum title length is 100'
  },
  description: {
    minLength: 'minimum description length is 20',
    maxLength: 'maximum description length is 1024',
  },
  createData: {
    invalidFormat: 'postData must be a valid ISO date',
  },
  image: {
    invalidFormat: 'image is required',
    maxLength: 'too long for field image. Maximum length is 256'
  },
  type: {
    invalidFormat: 'type must be Buy or Sell',
  },
  price: {
    invalidFormat: 'price must be an integer',
    min: 'minimum price is 100',
    max: 'maximum price is 20000'
  },
  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  bedrooms: {
    invalidFormat: 'Bedrooms must be an integer',
    minValue: 'Minimum bedrooms is 1',
    maxValue: 'Maximum bedrooms is 8',
  },
  guests: {
    invalidFormat: 'Guests must be an integer',
    minValue: 'Minimum guests is 1',
    maxValue: 'Maximum guests is 10',
  },
  amenities: {
    invalid: 'The city must be one of the following: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge'
  },
  images: {
    invalidFormat: 'Field images must be an array',
    maxValue: 'Maximum images is 6',
  },
} as const;

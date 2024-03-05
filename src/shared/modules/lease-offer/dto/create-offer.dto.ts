import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { CreateOfferValidationMessage } from './create-offer.messages.js';

import {
  CitiesEnum,
  AmenityEnum,
  Cities,
  Coordinates,
} from '../../../types/offer.type.js';

export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public name: string;

  @MinLength(20, {
    message: CreateOfferValidationMessage.description.minLength,
  })
  @MaxLength(1024, {
    message: CreateOfferValidationMessage.description.maxLength,
  })
  public description: string;

  @IsDateString(
    {},
    { message: CreateOfferValidationMessage.createData.invalidFormat }
  )
  public createData: Date;

  @IsEnum(CitiesEnum, { message: CreateOfferValidationMessage.type.invalid })
  public city: Cities;

  @IsArray({ message: CreateOfferValidationMessage.images.invalidFormat })
  @Max(200000, { message: CreateOfferValidationMessage.images.maxValue })
  public images: string[];

  @IsBoolean({ message: 'Must be a boolean type' })
  public premium: boolean;

  @IsBoolean({ message: 'Must be a boolean type' })
  public favorite: boolean;

  @IsInt({ message: CreateOfferValidationMessage.rating.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(200000, { message: CreateOfferValidationMessage.price.maxValue })
  public rating: number;

  @IsInt({ message: CreateOfferValidationMessage.bedrooms.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.bedrooms.minValue })
  @Max(200000, { message: CreateOfferValidationMessage.bedrooms.maxValue })
  public bedrooms: number;

  @IsInt({ message: CreateOfferValidationMessage.rating.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(200000, { message: CreateOfferValidationMessage.price.maxValue })
  public guests: number;

  @IsEnum(AmenityEnum, {
    message: CreateOfferValidationMessage.amenities.invalid,
  })
  public amenities: string[];

  public userId: string;

  public commentsCount: number;

  public coordinates: Coordinates;

  @IsInt({ message: CreateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(200000, { message: CreateOfferValidationMessage.price.maxValue })
  public price: number;
}

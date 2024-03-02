import {
  defaultClasses,
  getModelForClass,
  prop,
  modelOptions,
} from '@typegoose/typegoose';
import { createSHA256 } from '../../helpers/index.js';
import { User } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  },
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email!: string;

  @prop({ required: false, default: '' })
  public avatarPath: string;

  @prop({ required: true })
  public name!: string;

  public typeUser!: 'обычный' | 'pro';

  @prop({
    required: true,
    minlength: [6, 'Min length for password is 6'],
    trim: true,
  })
  public password!: string;

  constructor(userData: User) {
    super();

    this.email = userData.email;
    this.avatarPath = userData.avatarPath;
    this.name = userData.name;
    this.typeUser = userData.typeUser;
  }

  public setPassword(password: string, salt: string) {
    console.log(`Setting password, password: ${password}, salt: ${salt}`);
    this.password = String(createSHA256(password, salt));
    console.log(password);
  }

  public getPassword() {
    return this.password;
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);

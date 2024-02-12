export class CreateUserDto {
  public email: string;
  public avatarPath: string;
  public name: string;
  public typeUser: 'pro' | 'обычный';
  public password: string;
}

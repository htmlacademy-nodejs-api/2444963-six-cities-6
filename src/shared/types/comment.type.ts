import { User } from "./user.type.js";

export type Comment = {
  text: string;
  autor: User;
  reiting: string;
  postData: Date;
}

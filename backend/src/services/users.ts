import bcrypt from "bcrypt";
import { USERS } from "../db/tableNames";
import { createEntity } from "./dbService";

export async function create_user(user_body: any) {
  const saltRounds: number = 12;
  const password: string = user_body.hashed_password;
  user_body.hashed_password = bcrypt.hash(password, saltRounds);
  const new_user = await createEntity(USERS, user_body);
  return user_details(new_user);
}

function user_details(new_user: any) {
  return {
    id: new_user.id,
    nickname: new_user.nickname,
    email: new_user.email,
  };
}

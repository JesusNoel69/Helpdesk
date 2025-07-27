import { User } from "../../domain/entities/user.mjs";
import { UserDTO } from "../dtos/userDTO.mjs";

export default async function createUser(input, { userRepo }) {
  const user = new User({
    // input.id,
    roleUserId: input.roleUserId,
    createdAt: input.createdAt ? new Date(input.createdAt) : undefined,
    updatedAt: input.updatedAt ? new Date(input.updatedAt) : undefined,
    nameUser: String(input.nameUser),
    passwordUser: String(input.passwordUser),
    account: input.account,
  });
  const saved = await userRepo.save(user);
  return new UserDTO({
    id: saved.id,
    account: saved.account,
    nameUser: saved.nameUser,
    roleUser: {
      id: saved.role.id,
      name: saved.role.nameRole,
    },
  });
}

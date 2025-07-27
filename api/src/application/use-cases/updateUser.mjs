import { User } from "../../domain/entities/user.mjs";
import { UserDTO } from "../dtos/userDTO.mjs";

export default async function updateUser(input, { id }, { userRepo }) {
  console.log("input:", input);

  const user = new User({
    id: id.id,
    roleUserId: Number(input.roleUserId),
    createdAt: input.createdAt ? new Date(input.createdAt) : undefined,
    updatedAt: new Date(),
    nameUser: String(input.nameUser),
    passwordUser: String(input.passwordUser),
    account: input.account,
  });

  const saved = await userRepo.save(user);
  console.log(saved);
  return new UserDTO({
    id: saved.id,
    account: saved.account.email,
    nameUser: saved.nameUser,
    roleUser: {
      id: saved.role.id,
      name: saved.role.nameRole,
    },
  });
}

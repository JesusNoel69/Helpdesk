import { UserDTO } from "../dtos/userDTO.mjs";

export default async function getUserById(id, { userRepo }) {
  const user = userRepo.findById(id);
  return new UserDTO({
    id: user.id,
    account: user.account.email,
    nameUser: user.nameUser,
    roleUser: user.role.nameRole,
  });
}

import { UserDTO } from "../dtos/userDTO.mjs";

export default async function getALLUsers(_, { userRepo }) {
  const users = await userRepo.find();
  return users.map(
    (user) =>
      new UserDTO({
        id: user.id,
        account: user.account.email,
        nameUser: user.nameUser,
        roleUser: user.role.nameRole,
      })
  );
}

export class UserDTO {
  constructor({ id, roleUser, nameUser, account }) {
    this.id = id;
    this.roleUser = roleUser; //{ id, name: roleName }
    this.nameUser = nameUser;
    this.account = account;
  }
}

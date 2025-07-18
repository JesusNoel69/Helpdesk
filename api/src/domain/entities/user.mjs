// src/domain/entities/user.mjs

import Email from "../value-objects/email.mjs";

export class User {
  constructor({
    id,
    roleUserId,
    createdAt,
    updatedAt,
    nameUser,
    passwordUser,
    Account,
  }) {
    this.id = id;
    this.roleUserId = roleUserId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.nameUser = nameUser;
    this.passwordUser = passwordUser;
    this.Account = new Email(Account);
  }

  //uses test to handle null value
  isNameUserValid() {
    if (!this.nameUser) return false;
    const name = this.nameUser.toString();
    return name.length > 2 && !/\d+/.test(name);
  }

  // ToDo: implement proper hashing or move to Password VO
  isPassValid() {
    const pass = this.passwordUser.toString();
    const hasLetters = /[a-zA-Z]/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const hasNumbers = /\d/.test(pass);

    return hasLetters && hasSpecial && hasNumbers && pass.length >= 8;
  }
}

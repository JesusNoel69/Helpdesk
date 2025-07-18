import { ValueObject } from "./valueObject.mjs";

export default class Role extends ValueObject {
  constructor(id, nameRole) {
    if (!Role.isValidRole(nameRole)) {
      throw new Error(`Invalid Role ${nameRole}`);
    }
    super(nameRole);
    this.id = id;
    this.nameRole = nameRole;
  }

  static isValidRole(nameRole) {
    return typeof nameRole === "string";
  }
}

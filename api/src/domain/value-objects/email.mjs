import { ValueObject } from "./valueObject.mjs";

export default class Email extends ValueObject {
  constructor(email) {
    //should be validate email with static method
    if (!Email.isValidEmail(email)) {
      throw new Error(`Invalid email: ${email}`);
    }
    super(email);
    this.email = email;
  }

  static isValidEmail() {
    const email = this.toString();
    if (/[A-Z]/.test(email)) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

import { ValueObject } from "./valueObject.mjs";

export default class Priority extends ValueObject {
  constructor({ id, namePriority }) {
    if (!Priority.isValidPriority(namePriority)) {
      throw new Error(`Invalid Prioity ${namePriority}`);
    }
    super(namePriority);
    this.id = id;
    this.namePriority = namePriority;
  }

  static isValidPriority(namePriority) {
    const hasNumbers = /\d/.test(namePriority);
    return hasNumbers && namePriority.length > 0 && namePriority.length <= 50;
  }
}

import { isValidColorCode } from "./validators/colorValidator.mjs";
import { ValueObject } from "./valueObject.mjs";

export default class StateType extends ValueObject {
  constructor({ id, nameColor }) {
    if (!isValidColorCode(nameColor)) {
      throw new Error(`Invalid color code: ${color}`);
    }
    this.id = id;
    this.nameColor = nameColor;
  }
}

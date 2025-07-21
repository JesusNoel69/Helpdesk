import { isValidColorCode } from "./validators/colorValidator.mjs";
import { ValueObject } from "./valueObject.mjs";

export default class StateType extends ValueObject {
  constructor({ id, nameColor }) {
    if (!isValidColorCode(nameColor)) {
      throw new Error(`Invalid color code: ${nameColor}`);
    }
    super(nameColor);

    this.id = id;
    this.nameColor = nameColor;
  }
}

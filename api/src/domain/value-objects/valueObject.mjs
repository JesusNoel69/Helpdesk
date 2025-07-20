// src/domain/value-objects/ValueObject.mjs

export class ValueObject {
  constructor(value) {
    this._value = value;
  }

  equals(other) {
    return other instanceof this.constructor && this._value === other._value;
  }

  toString() {
    return String(this._value);
  }

  get value() {
    return this._value;
  }
}

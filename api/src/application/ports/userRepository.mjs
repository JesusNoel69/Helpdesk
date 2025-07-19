export class UserRepositoy {
  async findAll() {
    throw new Error("findAll not implemented yet");
  }
  /**
   * Return a User by id.
   * @param {number} id
   * @returns {Promise<import('../../domain/entities/user.mjs').User>}
   */
  async findById(id) {
    throw new Error("findById not implemented yet");
  }
  /**
   * Delete a User by id.
   * @param {number} id
   */
  async delete(id) {
    throw new Error("delete not implemented yet");
  }
  /**
   * Update or Create a User
   * @param {import('../../domain/entities/user.mjs').User} user
   * @returns {Promise<import('../../domain/entities/user.mjs').User>}
   */
  async save(user) {
    throw new Error("save not implemented yet");
  }
}

import User from "./users.model.js"

/* CRUD methods */
export class UserService {
  async findAllUsers() {
    return await User.findOne({
      where: {
        status: 'available'
      }
    })
  }

  async createUser(data) {
    return await User.create(data)
  }

  async findUserById(id) {
    return await User.findAll({
      where: {
        id,
        status: 'available'
      }
    })
  }

  async updateUser(user, data) {
    return await user.update(data)
  }

  async deleteUser() {
    return await User.delete({
      where: {
        status: 'available'
      }
    })
  }
}
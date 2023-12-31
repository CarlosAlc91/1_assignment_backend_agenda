import User from "./users.model.js"

/* CRUD methods */
export class UserService {
  async findAllUsers() {
    return await User.findAll({
      where: {
        status: 'available'
      }
    })
  }

  async createUser(data) {
    return await User.create(data)
  }

  async findUserById(id) {
    return await User.findOne({
      where: {
        id,
        status: 'available'
      }
    })
  }

  async updateUser(user, data) {
    return await user.update(data)
  }

  async deleteUser(user) {
    return await user.delete({
      where: {
        status: 'disable'
      }
    })
  }
}
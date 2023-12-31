import Repair from "./repairs.model.js"
import User from '../users/users.model.js'


export class RepairService {
  /* methods creation */
  async findAllRepairs() {
    return await Repair.findAll({
      where: {
        status: 'pending'
      }
    })
  }
  async createRepair(data) {
    return await Repair.create(data)
  }
  async findRepairById(id) {
    return await Repair.findOne({
      where: {
        id,
        status: 'pending'
      }
    })
  }
  async updateRepair(repair, data) {
    return await repair.update({
      ...data,
      status: 'completed'
    })

  }
  async deleteRepair(repair) {
    return await repair.update({ status: 'cancelled' })
  }
}
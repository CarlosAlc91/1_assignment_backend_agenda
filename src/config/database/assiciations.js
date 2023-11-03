import User from '../../users/users.model.js'
import Repair from '../../repairs/repairs.model.js'

export const initialModel = () => {
  User.hasMany(Repair)
  Repair.belongsTo(User)
}
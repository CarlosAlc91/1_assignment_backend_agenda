import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"
import User from "../users/users.model.js"

const Repair = sequelize.define("repair", {
  /* propiedades */
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'repair_id'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
    allowNull: false
  }
})

Repair.belongsTo(User, { foreignKey: 'userId' })

export default Repair
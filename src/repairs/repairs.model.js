import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"

const Repairs = sequelize.define("repair", {
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

export default Repairs
import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"


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

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  motorsNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: "motors_number",
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
    allowNull: false
  }
})

export default Repair
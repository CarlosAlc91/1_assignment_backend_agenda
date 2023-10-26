import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"
import { encryptedPassword } from "../config/plugins/encryptedPassword.js"

const User = sequelize.define('users', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id'
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("client", "employee"),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("available", "disable"),
    defaultValue: "available",
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      user.password = await encryptedPassword(user.password)
    }
  }
})

export default User
import { Sequelize } from "sequelize"
import { envs } from "../environments/environments.js"

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false
})

export async function authenticated() {
  try {
    await sequelize.authenticate()
    console.log('Successfully authenticated ✅')
  } catch (error) {
    throw new Error('Authentication errror ⚠️', error)
  }
}

export async function synchronized() {
  try {
    await sequelize.sync()
    console.log('Successfully synchronization ✅')
  } catch (error) {
    throw new Error('Synchronization errror ⚠️', error)
  }
}

export default sequelize
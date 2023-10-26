import { UserService } from "./users.service.js"
import { catchAsync } from "../errors/catchAsync.js"
import { validateRegister, validateLogin } from "./users.schema.js"
import generateJWT from '../config/plugins/generate.jwt.js'


const userService = new UserService()

export const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const registerUser = catchAsync(async (req, res, next) => {
  const {
    hasError,
    errorMessages,
    userData
  } = validateRegister(req.body)

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages
    })
  }

  const user = await userService.createUser(userData)

  const token = await generateJWT(user.id)

  return res.status(201).json({
    token,
    user: {
      name: user.name,
      email: user.email
    },
    user
  })
})

export const loginUser = catchAsync(async (req, res, next) => {

})

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const findUserById = async (req, res) => {
  try {
    const { id } = req.params

    const user = await userService.findUserById(id)
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `user with id ${id} not found`
      })
    }
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params

    /* to update */

    //*1. find an user
    const user = await userService.findUserById(id)
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `user with id ${id} not found`
      })
    }

    //*2. update user
    const userUpdated = await userService.updateUser(user, req.body)
    return res.status(200).json(userUpdated)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    /* to delete */

    //*1. find an user
    const user = await userService.findUserById(id)
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `user with id ${id} not found`
      })
    }

    //*2. delete user
    await userService.deleteUser(user)
    return res.status(204).json(null)

  } catch (error) {
    return res.status(500).json(error)
  }
}






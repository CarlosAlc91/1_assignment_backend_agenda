import { UserService } from "./users.service.js"
import { AppError, catchAsync } from "../errors/index.js"
import { validateRegister, validateLogin, validatePartialRegister } from "./users.schema.js"
import generateJWT from '../config/plugins/generate.jwt.js'
import { encryptedPassword, verifyPassword } from "../config/plugins/encryptedPassword.js"


const userService = new UserService()

export const findAllUsers = catchAsync(async (req, res) => {
  const users = await userService.findAllUsers()

  return res.status(201).json(users)
})

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
  const {
    hasError,
    errorMessages,
    userData
  } = validateLogin

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages
    })
  }

  const user = await userService.findUserById(userData.email)

  if (!user) {
    return next(
      new AppError('Account not exist', 401)
    )
  }

  const correctPassword = await verifyPassword(
    userData.password,
    user.password
  )

  if (!password) {
    return next(
      new AppError('Email or password incorrect', 401)
    )
  }

  const token = await generateJWT(user.id)

  return res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  })
})

export const createUser = catchAsync(async (req, res) => {
  const {
    hasError,
    errorMessages,
    userData
  } = validateRegister

  const users = await userService.createUser(userData)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: errorMessages
    })
  }
  return res.status(201).json(users)
})

export const findUserById = catchAsync(async (req, res) => {
  const { user } = req

  return res.status(201).json(user)
})

export const updateUser = catchAsync(async (req, res) => {
  const { user } = req
  const {
    hasError,
    errorMessages,
    userData
  } = validatePartialRegister(req.body)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: errorMessages
    })
  }

  const updateUser = await userService.updateUser(
    user,
    userData.name,
    userData.email
  )

  return res.status(201).json(updateUser)
})

export const deleteUser = catchAsync(async (req, res) => {
  const { user } = req
  await userService.deleteUser(user)
  return res.status(201).json(null)
})






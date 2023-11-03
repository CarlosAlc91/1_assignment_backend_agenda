import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

const registerUserSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  email: z.string().email({ message: 'invalid email' }),
  password: z.string().min(8, { message: 'password too short' }),
  role: z.enum(['employee', 'owner', 'customer'])
})

const loginUserSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  password: z.string().min(8, { message: 'password is too short' })
})

export const validateRegister = (data) => {
  const result = registerUserSchema.safeParse(data)

  const {
    hasError,
    errorMessages,
    data: userData
  } = extractValidationData(result)

  return {
    hasError,
    errorMessages,
    data: userData
  }
}

export const validatePartialRegister = (data) => {
  const result = registerUserSchema.partial.safeParse(data)
  const {
    hasError,
    errorMessages,
    data: userData
  } = extractValidationData(result)

  return {
    hasError,
    errorMessages,
    userData
  }
}

export const validateLogin = (data) => {
  const result = loginUserSchema.safeParse(data)

  const {
    hasError,
    errorMessages,
    data: userData
  } = extractValidationData(result)

  return {
    hasError,
    errorMessages,
    data: userData
  }
}

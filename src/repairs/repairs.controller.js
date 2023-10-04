import User from "../users/users.model.js"
import { RepairService } from "./repairs.service.js"

const repairService = new RepairService()

export const findAllRepairs = async (req, res) => {

  try {
    const repairs = await repairService.findAllRepairs()
    return res.status(200).json(repairs)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createRepair = async (req, res) => {

  try {
    const repair = await repairService.createRepair(req.body)
    return res.status(201).json(repair)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export const findRepairById = async (req, res) => {

  try {
    const { id } = req.params
    const repair = await repairService.findRepairById(id)
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `repair with id ${id} not found`,
        /* include: User */
      })
    }
    return res.status(200).json(repair)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export const updateRepair = async (req, res) => {

  try {
    const { id } = req.params
    const repair = await repairService.findRepairById(id)
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `repair with id ${id} not found`
      })
    }

    const repairUpdated = await repairService.updateRepair(repair, req.body)
    return res.status(200).json(repairUpdated)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params

    const repair = await repairService.findRepairById(id)
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `repair with id ${id} not found`
      })
    }

    await repairService.deleteRepair(repair)
    return res.status(204).json(null)
  } catch (error) {
    return res.status(500).json(error)
  }
}


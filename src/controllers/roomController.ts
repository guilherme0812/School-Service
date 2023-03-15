import { NextFunction, Request, Response, Router } from 'express'
import { AppDataSource } from '../data-source'
import { Room } from '../entities/Room'

const roomController = Router()

const roomRepository = AppDataSource.getRepository(Room)

roomController.get('/rooms', async (req: Request, res: Response) => {
  try {
    const rooms = await roomRepository.find()

    return res.json(rooms)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

export default roomController

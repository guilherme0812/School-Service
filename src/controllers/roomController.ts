import { Request, Response, Router } from 'express'
import { RoomServices } from '../services/RoomServices'

const roomController = Router()

const roomServices = new RoomServices()

roomController.get('/rooms', async (req: Request, res: Response) => {
  try {
    const rooms = await roomServices.findAll()

    return res.json(rooms)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

roomController.get('/room/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    return res
      .status(400)
      .json({ message: 'É necessário passar um id correto' })
  }

  try {
    const room = await roomServices.findOneOrFail({ id })

    return res.json(room)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

roomController.post('/room', async (req: Request, res: Response) => {
  try {
    const body = req.body
    const room = await roomServices.create(body)

    return res.status(201).json(room)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

roomController.put('/room/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    return res
      .status(400)
      .json({ message: 'É necessário passar um id correto' })
  }

  try {
    const room = await roomServices.update(id, req.body)
    return res.status(203).json(room)
  } catch (error) {
    return res.status(404).json({ message: 'Erro na requisição' })
  }
})

roomController.delete('/room/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: 'É necessário passar um id correto' })
  }

  try {
    const response = await roomServices.delete(id)
    return res.status(203).json(response)
  } catch (error) {
    return res.status(400).json({ message: 'Erro na requisição' })
  }
})

export default roomController

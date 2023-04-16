import { Request, Response, Router } from 'express'
import { LeasonServices } from '../services/LeasonServices'
import { CreateLeasonDto } from '../dto/leason/createLeasonDto'
import { validate } from 'class-validator'

const leasonController = Router()

const leasonServices = new LeasonServices()

leasonController.get('/leasons', async (req: Request, res: Response) => {
  try {
    const rooms = await leasonServices.findAll()

    return res.json(rooms)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

leasonController.get('/leason/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    return res
      .status(400)
      .json({ message: 'É necessário passar um id correto' })
  }

  try {
    const room = await leasonServices.findOneOrFail({ id })

    return res.json(room)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

leasonController.post('/leason', async (req: Request, res: Response) => {
  try {
    const body = req.body
    const createLeasonDto = new CreateLeasonDto()
    createLeasonDto.name = body.name
    createLeasonDto.description = body.description

    const errors = await validate(createLeasonDto)
    if (errors.length > 0) {
      res.status(400).json({ errors })
      return
    }

    const room = await leasonServices.create(body)
    return res.status(201).json(room)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Sever Error' })
  }
})

leasonController.put('/leason/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    return res
      .status(400)
      .json({ message: 'É necessário passar um id correto' })
  }

  try {
    const room = await leasonServices.update(id, req.body)
    return res.status(203).json(room)
  } catch (error) {
    return res.status(404).json({ message: 'Erro na requisição' })
  }
})

leasonController.delete('/leason/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: 'É necessário passar um id correto' })
  }

  try {
    const response = await leasonServices.delete(id)
    return res.status(203).json(response)
  } catch (error) {
    return res.status(400).json({ message: 'Erro na requisição' })
  }
})

export default leasonController

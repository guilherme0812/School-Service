import { NextFunction, Request, Response, Router } from 'express'
import { SubjectServices } from '../services/SubjectServices'

const subjectController = Router()

const subjectServices = new SubjectServices()

subjectController.get(
  '/subject',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subjects = await subjectServices.findAll()

      return res.json(subjects)
    } catch (error) {
      next(error)
    }
  }
)

subjectController.get('/subject/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    return res
      .status(400)
      .json({ message: 'É necessário passar um id correto' })
  }

  try {
    const subject = await subjectServices.findOneOrFail({
      id: id,
    })
    return res.status(200).json(subject)
  } catch (error) {
    return res.status(404).json({ message: 'Erro na requisição' })
  }
})

subjectController.post(
  '/subject',
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: 'O nome é obrigatório' })
    }

    try {
      const subject = await subjectServices.create(name)
      return res.status(201).json(subject)
    } catch (error) {
      next(Error)
    }
  }
)

export default subjectController

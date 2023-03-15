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

subjectController.get('/subject/:id', (req: Request, res: Response) => {
  res.json({ message: req.params.id })
})

subjectController.post(
  '/subject',
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: 'O nome é obrigatório' })
    }

    try {
      const subject = subjectServices.create(name)
      return res.status(201).json(subject)
    } catch (error) {
      next(Error)
    }
  }
)

export default subjectController

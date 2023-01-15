import express, { Request, Response } from 'express'
import { AppDataSource } from './config/data-source'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.get('/', (_, res: Response) => {
    res.send([{ message: 'Voce acessou o server' }])
  })

  return app.listen(process.env.PORT || 3000, () => {
    console.log(`Server initialized! at port ${process.env.PORT || 3000}`)
  })
})

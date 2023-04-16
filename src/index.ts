import express from 'express'
import leasonController from './controllers/leasonController'
import subjectController from './controllers/subjectController'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.use([subjectController, leasonController])

  return app.listen(process.env.PORT || 3000, () => {
    console.log(`Server initialized! at port ${process.env.PORT || 3000}`)
  })
})

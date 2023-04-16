import { FindOptionsWhere } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Leason } from '../entities/Leason'

const lessonRepository = AppDataSource.getRepository(Leason)

export class LeasonServices {
  async findOneOrFail(options: FindOptionsWhere<Leason>) {
    return await lessonRepository.findOneByOrFail(options)
  }

  async findAll() {
    return await lessonRepository.find()
  }

  async create(body: any) {
    const newLeason = lessonRepository.create(body)

    const data = await lessonRepository.save(newLeason)
    return data
  }

  async update(id: string, body: any) {
    const leason = await this.findOneOrFail({ id })

    lessonRepository.merge(leason, body)
    leason.subjects = body.subjects ? [...body.subjects] : []
    const result = await lessonRepository.save(leason)

    return result
  }

  async delete(id: string) {
    const leason = await this.findOneOrFail({ id })

    lessonRepository.softDelete({ id })
    return { message: 'deleted with success' }
  }
}

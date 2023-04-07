import { AppDataSource } from '../data-source'
import { Subject } from '../entities/Subject'
import { FindOptionsWhere } from 'typeorm'

export interface CreateUserProp {
  name: string
}

const subjectRepository = AppDataSource.getRepository(Subject)

export class SubjectServices {
  findAll() {
    return subjectRepository.find()
  }

  async findOneOrFail(options: FindOptionsWhere<Subject>) {
    return await subjectRepository.findOneByOrFail(options)
  }

  async create(name: string) {
    const newSubject = subjectRepository.create({ name })

    const data = await subjectRepository.save(newSubject)
    return data
  }

  async update(id: string, data: CreateUserProp) {
    const user = await subjectRepository.findOneByOrFail({
      id: id,
    })

    subjectRepository.merge(user, data)

    const newUser = await subjectRepository.save(user)
    return newUser
  }

  async delete(id: string) {
    const user = await subjectRepository.findOneByOrFail({
      id: id,
    })

    subjectRepository.softDelete({ id })
    return { message: 'deleted with success' }
  }
}

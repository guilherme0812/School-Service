import { AppDataSource } from '../data-source'
import { Subject } from '../entities/Subject'
import { FindOptionsWhere } from 'typeorm'

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
}

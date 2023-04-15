import { FindOptionsWhere } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Room } from '../entities/Room'

const roomRepository = AppDataSource.getRepository(Room)

export class RoomServices {
  async findOneOrFail(options: FindOptionsWhere<Room>) {
    return await roomRepository.findOneByOrFail(options)
  }

  async findAll() {
    return await roomRepository.find()
  }

  async create(body: any) {
    const newRoom = roomRepository.create(body)

    const data = await roomRepository.save(newRoom)
    return data
  }

  async update(id: string, body: any) {
    const room = await this.findOneOrFail({ id })

    roomRepository.merge(room, body)
    room.subjects = body.subjects ? [...body.subjects] : []
    const result = await roomRepository.save(room)

    return result
  }

  async delete(id: string) {
    const room = await this.findOneOrFail({ id })

    roomRepository.softDelete({ id })
    return { message: 'deleted with success' }
  }
}

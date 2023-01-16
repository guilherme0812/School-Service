import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Video } from './Video'

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[]
}

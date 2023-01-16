import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Room } from './Room'

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  url: string

  @ManyToOne(() => Room, (room) => room.videos)
  @JoinColumn({ name: 'room_id' })
  room: Room
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Leason } from './Leason'

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  url: string

  @ManyToOne(() => Leason, (leason) => leason.videos)
  @JoinColumn({ name: 'room_id' })
  leason: Leason
}

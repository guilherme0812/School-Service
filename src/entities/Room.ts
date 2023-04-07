import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Video } from './Video'
import { Subject } from './Subject'

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[]

  @ManyToMany(() => Subject, (subject) => subject.rooms)
  subjects: Subject[]

  @CreateDateColumn({ name: 'create_at' })
  createAt: string

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string
}

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Room } from './Room'

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToMany(() => Room, (room) => room.subjects)
  @JoinTable()
  rooms: Room[]

  @CreateDateColumn()
  createAt: string

  @UpdateDateColumn()
  updateAt: string

  @DeleteDateColumn()
  deleteAt: string
}

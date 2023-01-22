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

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToMany(() => Room)
  @JoinTable()
  rooms: Room[]

  @CreateDateColumn({ name: 'create_at' })
  createAt: string

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string
}

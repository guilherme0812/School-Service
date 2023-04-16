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
import { Leason } from './Leason'

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToMany(() => Leason, (leason) => leason.subjects)
  @JoinTable()
  rooms: Leason[]

  @CreateDateColumn()
  createAt: string

  @UpdateDateColumn()
  updateAt: string

  @DeleteDateColumn()
  deleteAt: string
}

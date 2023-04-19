import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Studant } from './Studant'
import { Leason } from './Leason'
import { Subject } from './Subject'

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Studant, (studant) => studant.class)
  studants: Studant[]

  @ManyToMany(() => Subject, (subject) => subject.classes, { eager: true })
  @JoinTable()
  subjects: Subject[]

  @CreateDateColumn({ name: 'create_at' })
  createAt: string

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string
}

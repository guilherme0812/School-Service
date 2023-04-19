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
import { Class } from './Class'

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @ManyToMany(() => Leason, (leason) => leason.subjects, { eager: true })
  @JoinTable()
  leasons: Leason[]

  @ManyToMany(() => Class, (classe) => classe.subjects)
  classes: Class[]

  @CreateDateColumn()
  createAt: string

  @UpdateDateColumn()
  updateAt: string

  @DeleteDateColumn()
  deleteAt: string
}

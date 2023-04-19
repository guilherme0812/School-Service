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

@Entity('leason')
export class Leason {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string

  @OneToMany(() => Video, (video) => video.leason, { eager: true })
  videos: Video[]

  @ManyToMany(() => Subject, (subject) => subject.leasons)
  subjects: Subject[]

  @CreateDateColumn({ name: 'create_at' })
  createAt: string

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string
}

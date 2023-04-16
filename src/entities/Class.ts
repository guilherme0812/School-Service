import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  //   JoinTable,
  //   ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @CreateDateColumn({ name: 'create_at' })
  createAt: string

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string
}

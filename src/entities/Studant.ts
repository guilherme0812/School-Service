import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Class } from './Class'

export enum StudantEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

@Entity()
export class Studant {
  @PrimaryColumn({ unique: true })
  cpf: string

  @Column()
  name: string

  @Column({ type: 'date' })
  birthDate: Date

  @Column({ nullable: false })
  couse: string

  @Column({ type: 'enum', enum: StudantEnum, default: StudantEnum.INACTIVE })
  status: StudantEnum

  @Column()
  enrollment: string

  @ManyToOne(() => Class, (classe) => classe.studants, { eager: true })
  @JoinTable()
  class: Class

  @CreateDateColumn({ name: 'create_at' })
  createAt: string

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import { AccountModel } from '../../../data/model/account'

@Entity()
export class User extends BaseEntity implements AccountModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  accessToken: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true })
  role: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}

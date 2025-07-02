import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm/browser';

import { Addiction } from './addiction';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'datetime', nullable: true })
    startDate: Date | null;

    @OneToOne(() => Addiction, (addiction) => addiction.user, { nullable: true, eager: true })
    @JoinColumn()
    addiction: Addiction | null;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime' })
    updatedAt: Date;
}

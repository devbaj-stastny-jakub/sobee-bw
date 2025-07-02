import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('streak')
export class Streak {
    @PrimaryGeneratedColumn()
    streakId: string;

    @Column()
    startDate: Date;

    @Column({ nullable: true })
    endDate: Date | null;
}

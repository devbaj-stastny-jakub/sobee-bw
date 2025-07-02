import { Column, DataSource, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm/browser';

import { User } from './user';

@Entity('addiction')
export class Addiction {
    @PrimaryGeneratedColumn()
    addictionId: number;

    @Column()
    name: string | null;

    @OneToOne(() => User, (user) => user.addiction, { nullable: true })
    user: User | null;
}

export const initializeAddictions = async (dataSource: DataSource) => {
    const addictions = [
        { name: 'Cigarettes' },
        { name: 'Alcohol' },
        { name: 'Drugs' },
        { name: 'Sugar' },
        { name: 'Social Media' },
        { name: 'Gaming' },
        { name: 'Shopping' },
    ];

    const addictionRepository = dataSource.getRepository(Addiction);
    await addictionRepository.save(addictions);
};

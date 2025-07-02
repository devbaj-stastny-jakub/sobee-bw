import { DataSource } from 'typeorm/browser';

import { Addiction } from './entities/addiction';
import { Streak } from './entities/streak';
import { User } from './entities/user';

export const dataSource = new DataSource({
    database: 'default',
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    driver: require('expo-sqlite'),
    entities: [User, Addiction, Streak],
    synchronize: true,
    type: 'expo',
});

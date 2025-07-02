import { dataSource } from './dataSource';
import { Addiction, Streak, User } from './entities';

export const userRepository = dataSource.getRepository(User);
export const addictionRepository = dataSource.getRepository(Addiction);
export const streakRepository = dataSource.getRepository(Streak);

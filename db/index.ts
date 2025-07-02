import { dataSource } from './dataSource';

export const initializeDatabase = async () => {
    try {
        await dataSource.initialize();
        console.log('Data source has been initialized!');
    } catch (error) {
        console.error('Error during data source initialization:', error);
    }
};

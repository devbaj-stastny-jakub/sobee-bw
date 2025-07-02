import moment from 'moment';

import { Milestone } from '../types';

export const availableMilestones: Milestone[] = [
    { name: 'initial', requiredDuration: 0 },
    { name: '10 seconds', requiredDuration: moment.duration(10, 'seconds').asSeconds() },
    { name: '30 seconds', requiredDuration: moment.duration(30, 'seconds').asSeconds() },
    { name: 'minute', requiredDuration: moment.duration(1, 'minute').asSeconds() },
    { name: 'hour', requiredDuration: moment.duration(1, 'hour').asSeconds() },
    { name: 'day', requiredDuration: moment.duration(1, 'day').asSeconds() },
    { name: 'week', requiredDuration: moment.duration(1, 'week').asSeconds() },
    { name: 'month', requiredDuration: moment.duration(1, 'month').asSeconds() },
    { name: '100 days', requiredDuration: moment.duration(100, 'days').asSeconds() },
    { name: 'year', requiredDuration: moment.duration(1, 'year').asSeconds() },
];

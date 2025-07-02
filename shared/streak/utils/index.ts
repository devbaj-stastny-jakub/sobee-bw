import moment from 'moment';

import { Streak } from '@/db/entities';

export const getDurationOfStreak = (streak: Streak) => {
    const endDate = streak.endDate ? moment(streak.endDate) : moment();
    const startDate = moment(streak.startDate);
    const duration = moment.duration(endDate.diff(startDate));

    return duration;
};

export const getSinceOfStreak = (streak: Streak) => {
    const duration = getDurationOfStreak(streak);

    return {
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
    };
};

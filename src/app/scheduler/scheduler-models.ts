export interface Schedule {
    scheduleType: ScheduleTypeEnum;
    values: string[];
    time?: string;
}

export enum ScheduleTypeEnum {
    HOURLY = 'Hourly',
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly'
}

export enum WeekDaysEnum {
    MON = 'Mon',
    TUE = 'Tue',
    WED = 'Wed',
    THU = 'Thu',
    FRI = 'Fri',
    SAT = 'Sat',
    SUN = 'Sun'
}

export const DEFAULT_TIME_VALUE: string = '00:00';

export type SelectableValue = { value: string, selected: boolean };
  
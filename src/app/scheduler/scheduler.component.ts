import { Component } from '@angular/core';
import { DEFAULT_TIME_VALUE, Schedule, ScheduleTypeEnum } from './scheduler-models';

@Component({
  selector: 'scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {

  scheduleTypeEnum = ScheduleTypeEnum;
  scheduleTypeList: string[] = Object.values(ScheduleTypeEnum);
  selectedType = ScheduleTypeEnum.HOURLY;

  schedule: Schedule = {
    scheduleType: this.selectedType,
    values: []
  }

  setScheduleType(type: string) {
    this.selectedType = type as ScheduleTypeEnum;
    this.schedule.scheduleType = this.selectedType;
    this.schedule.values = [];

    if (this.selectedType === ScheduleTypeEnum.WEEKLY || this.selectedType === ScheduleTypeEnum.MONTHLY) {
      this.schedule.time = DEFAULT_TIME_VALUE;
    } else {
      delete this.schedule.time;
    }

    this.scheduleChanged();
  }

  scheduleChanged() {
    setTimeout(() =>  console.log('Schedule: ', this.schedule),0);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectableValue, WeekDaysEnum } from '../scheduler-models';

@Component({
  selector: 'weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.scss']
})
export class WeeklyScheduleComponent implements OnInit {

  @Input() time!: string | undefined;
  @Input() selectedDays: string[] = [];
  @Output() selectedDaysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() timeChange: EventEmitter<string> = new EventEmitter<string>();

  weekDaysEnum = WeekDaysEnum;
  weekDaysList: SelectableValue[] = [];

  ngOnInit() {
    this.weekDaysList = Object.values(WeekDaysEnum).map(e => { 
      return { value: e, selected: false }
    });
  }

  changeSelected(weekDay: SelectableValue) {
    weekDay.selected = !weekDay.selected;

    if (!weekDay.selected) {
      let index = this.selectedDays.indexOf(weekDay.value as WeekDaysEnum);
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push((weekDay.value));
    }
    
    this.selectedDaysChange.emit(this.selectedDays);
  }

  updateTime() {
    this.timeChange.emit(this.time);
  }
}

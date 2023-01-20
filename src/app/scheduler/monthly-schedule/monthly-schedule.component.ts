import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectableValue } from '../scheduler-models';

@Component({
  selector: 'monthly-schedule',
  templateUrl: './monthly-schedule.component.html',
  styleUrls: ['./monthly-schedule.component.scss']
})
export class MonthlyScheduleComponent implements OnInit {

  @Input() time!: string | undefined;
  @Input() selectedValues: string[] = [];
  @Output() selectedValuesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() timeChange: EventEmitter<string> = new EventEmitter<string>();

  days: SelectableValue[] = [];
  lastDay: SelectableValue = { value: 'Last day', selected: false };

  ngOnInit() {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1).map(e => {
      return { value: e.toString(), selected: false }
    });
  }

  toggleDay(day: SelectableValue) {
    day.selected = !day.selected;

    if (day.selected) {
      this.selectedValues.push(day.value);
    } else {
      let index = this.selectedValues.lastIndexOf(day.value);
      this.selectedValues.splice(index, 1);
    }

    this.selectedValues.sort((a,b) => Number(a) < Number(b) ? -1 : 1);
    this.selectedValuesChange.emit(this.selectedValues);
  }

  updateTime() {
    this.timeChange.emit(this.time);
  }
}

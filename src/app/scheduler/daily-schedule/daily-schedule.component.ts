import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEFAULT_TIME_VALUE } from '../scheduler-models';

@Component({
  selector: 'daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.scss']
})
export class DailyScheduleComponent implements OnInit {

  @Input() values!: string[];
  @Output() valuesChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  ngOnInit(): void {
    if (!this.values.length) {
      this.values.push(DEFAULT_TIME_VALUE);
    }
  }

  addValue() {
    this.values.push(DEFAULT_TIME_VALUE);
    this.updateValues();
  }

  removeValue(index: number) {
    this.values.splice(index, 1);
    this.updateValues();
  }

  updateValues() {
    this.valuesChange.emit(this.values);
  }

  trackByFn(index: number) {
    return index;
  }
}

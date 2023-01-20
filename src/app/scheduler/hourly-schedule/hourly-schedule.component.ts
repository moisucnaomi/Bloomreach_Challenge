import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hourly-schedule',
  templateUrl: './hourly-schedule.component.html',
  styleUrls: ['./hourly-schedule.component.scss']
})
export class HourlyScheduleComponent implements OnInit {

  @Input() values!: string[];
  @Output() valuesChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  ngOnInit(): void {
    if (!this.values.length) {
      this.values.push('0');
    }
  }

  addValue() {
    this.values.push('0');
    this.updateValues();
  }

  removeValue(index: number) {
    this.values.splice(index,1);
    this.updateValues();
  }

  updateValues() {
    this.valuesChange.emit(this.values);
  }

  trackByFn(index: number) {
    return index;
  }
}

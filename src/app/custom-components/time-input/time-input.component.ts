import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_TIME_VALUE } from 'src/app/scheduler/scheduler-models';

@Component({
  selector: 'time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent {

  @Input() withButton: boolean = false;
  @Input() value!: string | undefined;
  @Output() valueChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() actionButton:EventEmitter<string> = new EventEmitter<string>();

  modelChanged() {
    if (!this.value?.length) {
      this.value = DEFAULT_TIME_VALUE;
    }

    this.valueChange.emit(this.value);
  }

  actionButtonClicked() {
    this.actionButton.emit();
  }
}

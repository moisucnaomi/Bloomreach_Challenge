import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})
export class CustomRadioComponent {

  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() change: EventEmitter<void> = new EventEmitter<void>();

  toggleRadioButton() {
    if (this.checked) {
      return;
    }

    this.checked = true;
    this.change.emit()
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {

  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleCheckbox() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}

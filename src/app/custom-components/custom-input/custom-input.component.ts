import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() type: 'text' | 'number' = 'text';
  @Input() withButton: boolean = false;
  @Input() maxNumber?: number;
  @Input() minNumber?: number;
  @Input() value!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() actionButton: EventEmitter<void> = new EventEmitter<void>();

  valueChanged: Subject<string> = new Subject<string>();
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.valueChanged
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500), 
        distinctUntilChanged()) 
      .subscribe(() => {
        this.updateValue();
      });
  }

  updateValue() {
    if (this.type === 'number') {
      if (!Number(this.value)) {
        this.value = '0';
      } else {
        this.value = Number(this.value).toString();
        if (this.maxNumber && Number(this.value) > this.maxNumber)
          this.value = this.maxNumber.toString();
        if (this.minNumber !== undefined && Number(this.value) < this.minNumber)
          this.value = this.minNumber.toString();
      }
    }
    this.valueChange.emit(this.value);
  }

  modelChanged() {
    this.valueChanged.next(this.value);
  }

  actionButtonClicked() {
    this.actionButton.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
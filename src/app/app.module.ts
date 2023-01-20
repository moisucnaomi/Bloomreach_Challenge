import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HourlyScheduleComponent } from './scheduler/hourly-schedule/hourly-schedule.component';
import { DailyScheduleComponent } from './scheduler/daily-schedule/daily-schedule.component';
import { WeeklyScheduleComponent } from './scheduler/weekly-schedule/weekly-schedule.component';
import { MonthlyScheduleComponent } from './scheduler/monthly-schedule/monthly-schedule.component';
import { TimeInputComponent } from './custom-components/time-input/time-input.component';
import { CustomInputComponent } from './custom-components/custom-input/custom-input.component';
import { CustomCheckboxComponent } from './custom-components/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from './custom-components/custom-radio/custom-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    TimeInputComponent,
    CustomInputComponent,
    HourlyScheduleComponent,
    DailyScheduleComponent,
    WeeklyScheduleComponent,
    MonthlyScheduleComponent,
    CustomCheckboxComponent,
    CustomRadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

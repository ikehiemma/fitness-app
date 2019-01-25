import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// shared module
import { SharedModule } from '../shared/shared.module';

// components
import { ScheduleCalendarComponent } from "./components/schedule-calendar/schedule-calendar.component";
import { ScheduleDaysComponent } from "./components/schedule-days/schedule-days.component";
import { ScheduleControlsComponent } from "./components/schedule-controls/schedule-controls.component";
import { ScheduleSectionComponent } from "./components/schedule-section/schedule-section.component";
import { ScheduleAssignComponent } from "./components/schedule-assign/schedule-assign.component";

// containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

export const ROUTES: Routes = [
    { path: '', component: ScheduleComponent}
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        ScheduleComponent,
        ScheduleCalendarComponent,
        ScheduleDaysComponent,
        ScheduleControlsComponent,
        ScheduleSectionComponent,
        ScheduleAssignComponent
    ],
    providers: []
})
export class ScheduleModule {}
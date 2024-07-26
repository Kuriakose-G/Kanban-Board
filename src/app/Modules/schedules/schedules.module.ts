import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
  ]
})
export class SchedulesModule { }

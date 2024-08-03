import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../service/schedules.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedules-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedules-list.component.html',
  styleUrl: './schedules-list.component.css'
})
export class SchedulesListComponent implements OnInit{
  allSchedules$!: Observable<any>;

  constructor(private service:SchedulesService){}

  ngOnInit(): void {
    this.allSchedules$ = this.service.getSchedules();
   }

   getPriorityLabel(priorityId: number): string {
    switch (priorityId) {
      case 1:
        return 'High';
      case 2:
        return 'Medium';
      case 3:
        return 'Low';
      default:
        return 'None';
    }
  }

}

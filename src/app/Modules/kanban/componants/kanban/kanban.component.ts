import { Component } from '@angular/core';
import { PlanListComponent } from "../../../plan/plan-list/plan-list.component";
import { SchedulesListComponent } from "../../../schedules/schedules-list/schedules-list.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../../../kanban-home/home/home.component";

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [PlanListComponent, SchedulesListComponent, CommonModule, HomeComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent {

  selectedTab: string = 'schedules';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

}

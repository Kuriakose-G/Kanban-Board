import { Component, OnInit } from '@angular/core';
import { PlanService } from '../service/plan.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css'
})
export class PlanListComponent implements OnInit{
  allPlans$!:Observable<any>;

  constructor(private service:PlanService){}

  ngOnInit(): void {
    this.allPlans$ = this.service.getPlans()
   }
}

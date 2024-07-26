import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getPlans(){
    return this.http.get(`${this.apiUrl}/plans`);
  }
}

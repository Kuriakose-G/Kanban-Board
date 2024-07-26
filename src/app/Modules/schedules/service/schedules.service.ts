import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getSchedules(){
    return this.http.get(`${this.apiUrl}/schedules`)
  }
}

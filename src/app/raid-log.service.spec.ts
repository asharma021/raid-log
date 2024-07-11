import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaidLogService {
  private baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  getDoneList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/done-list`);
  }

  getActiveList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/active-list`);
  }
}

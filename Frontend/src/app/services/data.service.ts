import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DataItem {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5085/api/data';

  constructor(private http: HttpClient) { }

  getAll(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.apiUrl);
  }

  getById(id: number): Observable<DataItem> {
    return this.http.get<DataItem>(`${this.apiUrl}/${id}`);
  }

  create(item: Partial<DataItem>): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  update(id: number, item: Partial<DataItem>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, item);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = 'http://localhost:8081/user-mgmt';
 
  constructor(private http: HttpClient) { }
 
  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `/getUsers/`+ `${id}`);
  }
 
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, user);
  }
 
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update/`+ `${id}`, value);
  }
 
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete/`+ `${id}`, { responseType: 'text' });
  }
 
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getUsers`);
  }
 
}
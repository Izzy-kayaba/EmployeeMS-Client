import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { EmployeeElement } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serverUrl: string = "http://localhost:3003";

  constructor(private http: HttpClient) { }

  private errorHandler(error: HttpErrorResponse) {
    // Handle error and return an observable or throw an error
    console.error('Error:', error);
    return throwError('Something went wrong. Please try again later.');
  }

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverUrl}/api/employees`)
      .pipe(catchError(this.errorHandler));
  }

  postEmployee(data: any) {
    return this.http.post<any>(`${this.serverUrl}/api/employees`, data)
  }

  getEmployeeById(id: number) {
    return this.http.get<any>(`${this.serverUrl}/api/employees/${id}`)
  }

  updateEmployee(data: any, id: number) {
    return this.http.put<any>(`${this.serverUrl}/api/employees/${id}`, data)
  }

  deleteEmployee(id: number) {
    return this.http.put<any>(`${this.serverUrl}/api/employees/soft-delete/${id}`, null)
  }

}


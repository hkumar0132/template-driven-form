import { Injectable } from '@angular/core';
import { Employee } from './Employee'

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  employee : Employee = new Employee();

  constructor() { }

  employeeUpdate(employee : Employee) {
    this.employee = employee;
  }
}

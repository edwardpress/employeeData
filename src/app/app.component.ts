import { Component, OnInit } from '@angular/core';
import mockEmployeeData from '../app/shared/mockdata/mockData.json';
import { Employee } from './shared/models/employee-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  employeeData = mockEmployeeData;
  title = 'employeeData';
  employeeCount = 0;
  mostRecentEmployee: Employee = new Employee();
  highestEarningEmployee: Employee = new Employee();

  ngOnInit(): void {
    this.employeeCount = this.employeeData.length;
    this.highestEarningEmployee = this.getHighestEarningEmployee(
      this.employeeData
    );
    this.mostRecentEmployee = this.getMostRecentEmployee(this.employeeData);
  }

  getHighestEarningEmployee(employeeData: Array<Employee>) {
    return employeeData.reduce((prev, current) => {
      return prev.salary > current.salary ? prev : current;
    });
  }

  getMostRecentEmployee(employeeData: Array<Employee>) {
    return employeeData.reduce((prev, current) => {
      return new Date(prev.dateJoined) > new Date(current.dateJoined)
        ? prev
        : current;
    });
  }
}

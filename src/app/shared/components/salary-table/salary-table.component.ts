import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../models/employee-model';

@Component({
  selector: 'app-salary-table',
  templateUrl: './salary-table.component.html',
  styleUrls: ['./salary-table.component.scss'],
})
export class SalaryTableComponent implements OnInit {
  @Input() employeeData: Array<Employee>;
  nameSortingHeader: String = '';
  dateSortingHeader: String = 'desc';
  salarySortingHeader: String = '';

  constructor() {
    this.employeeData = [];
  }

  ngOnInit() {
    this.sortByJoinedDate(this.employeeData);
  }

  getFullName(firstName: String, lastName: String) {
    return firstName + ' ' + lastName;
  }

  sortByJoinedDate(employeeData: Array<Employee>) {
    employeeData.sort((a, b) => {
      return (
        new Date(b.dateJoined).getTime() - new Date(a.dateJoined).getTime()
      );
    });

    return employeeData;
  }

  updateSortingHeader(header: HTMLTableHeaderCellElement) {
    this.dateSortingHeader = '';
    this.nameSortingHeader = '';
    this.salarySortingHeader = '';

    const sortOrder = header.getAttribute('order');
    const name = header.getAttribute('name');

    if (name == 'firstname') {
      this.nameSortingHeader = sortOrder as String;
    } else if (name == 'dateJoined') {
      this.dateSortingHeader = sortOrder as String;
    } else {
      this.salarySortingHeader = sortOrder as String;
    }
  }
}

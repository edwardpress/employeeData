import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() employeeCount: Number = 0;
  @Input() highestEarningEmployee: Employee = new Employee();
  @Input() mostRecentEmployee: Employee = new Employee();
}

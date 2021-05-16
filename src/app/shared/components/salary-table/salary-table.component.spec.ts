import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTableComponent } from './salary-table.component';
import { SortTableDirective } from 'src/app/shared/directives/sort-table.directive';

describe('SalaryTableComponent', () => {
  let component: SalaryTableComponent;
  let fixture: ComponentFixture<SalaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaryTableComponent, SortTableDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by joined Date on descending order', () => {
    const fixture = TestBed.createComponent(SalaryTableComponent);
    component.employeeData = [
      {
        id: 1005,
        employeeId: '51ce9fe4-7fee-451a-a20c-ef0d626efd3a',
        firstname: 'Lea',
        lastname: 'Lindsay',
        dateJoined: 'Mon Jul 08 1991 13:19:00 GMT+0800 (Malaysia Time)',
        salary: 8523,
      },
      {
        id: 1006,
        employeeId: '636d7aa0-1777-46d9-87ac-b1406020372f',
        firstname: 'Morgan',
        lastname: 'Jarvis',
        dateJoined: 'Mon Jul 15 1985 07:25:52 GMT+0800 (Malaysia Time)',
        salary: 9002,
      },
      {
        id: 1007,
        employeeId: 'd68dc6b0-87fc-4e7c-a4d0-5be688904c5b',
        firstname: 'Hancock',
        lastname: 'Cohen',
        dateJoined: 'Mon Apr 14 1980 23:41:12 GMT+0730 (Malaysia Time)',
        salary: 10877,
      },
      {
        id: 1008,
        employeeId: '8e1b2e3a-01aa-43d0-b3cb-ef95f396f77c',
        firstname: 'Gordon',
        lastname: 'Dodson',
        dateJoined: 'Fri Oct 20 1995 12:39:26 GMT+0800 (Malaysia Time)',
        salary: 10084,
      },
    ];

    const expectedAnswer = [
      {
        id: 1008,
        employeeId: '8e1b2e3a-01aa-43d0-b3cb-ef95f396f77c',
        firstname: 'Gordon',
        lastname: 'Dodson',
        dateJoined: 'Fri Oct 20 1995 12:39:26 GMT+0800 (Malaysia Time)',
        salary: 10084,
      },

      {
        id: 1005,
        employeeId: '51ce9fe4-7fee-451a-a20c-ef0d626efd3a',
        firstname: 'Lea',
        lastname: 'Lindsay',
        dateJoined: 'Mon Jul 08 1991 13:19:00 GMT+0800 (Malaysia Time)',
        salary: 8523,
      },

      {
        id: 1006,
        employeeId: '636d7aa0-1777-46d9-87ac-b1406020372f',
        firstname: 'Morgan',
        lastname: 'Jarvis',
        dateJoined: 'Mon Jul 15 1985 07:25:52 GMT+0800 (Malaysia Time)',
        salary: 9002,
      },
      {
        id: 1007,
        employeeId: 'd68dc6b0-87fc-4e7c-a4d0-5be688904c5b',
        firstname: 'Hancock',
        lastname: 'Cohen',
        dateJoined: 'Mon Apr 14 1980 23:41:12 GMT+0730 (Malaysia Time)',
        salary: 10877,
      },
    ];

    const app = fixture.componentInstance;

    expect(app.sortByJoinedDate(component.employeeData)).toEqual(
      expectedAnswer
    );
  });
});

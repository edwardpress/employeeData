import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { SalaryTableComponent } from './shared/components/salary-table/salary-table.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DashboardComponent, SalaryTableComponent],
      imports: [NgxBootstrapIconsModule.pick(allIcons)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`this test is to test the function of getting employee with highest salary  '`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const testData = [
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

    const expectedAnswer = {
      id: 1007,
      employeeId: 'd68dc6b0-87fc-4e7c-a4d0-5be688904c5b',
      firstname: 'Hancock',
      lastname: 'Cohen',
      dateJoined: 'Mon Apr 14 1980 23:41:12 GMT+0730 (Malaysia Time)',
      salary: 10877,
    };

    const app = fixture.componentInstance;
    expect(app.getHighestEarningEmployee(testData)).toEqual(expectedAnswer);
  });

  it(`this test is to test the function of getting employee with recent join time  '`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const testData = [
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

    const expectedAnswer = {
      id: 1008,
      employeeId: '8e1b2e3a-01aa-43d0-b3cb-ef95f396f77c',
      firstname: 'Gordon',
      lastname: 'Dodson',
      dateJoined: 'Fri Oct 20 1995 12:39:26 GMT+0800 (Malaysia Time)',
      salary: 10084,
    };

    const app = fixture.componentInstance;
    expect(app.getMostRecentEmployee(testData)).toEqual(expectedAnswer);
  });
});

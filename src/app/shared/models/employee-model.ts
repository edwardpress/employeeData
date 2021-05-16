export interface IEmployee {
  id: number;
  employeeId: string;
  firstname: string;
  lastname: string;
  dateJoined: string;
  salary: number;
}

export class Employee implements IEmployee {
  id: number = 0;
  employeeId: string = '';
  firstname: string = '';
  lastname: string = '';
  dateJoined: string = '';
  salary: number = 0;
}

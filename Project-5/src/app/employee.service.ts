import { Injectable } from '@angular/core';
import { Employee} from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
employee:Employee[]=[
  {
    id:1,
    name:'Sharmila',
    role:'SDE',
    location:'Bangalore'
  },

    {
    id:2,
    name:'Karthik',
    role:'TL',
    location:'Chennai'
  },

    {
    id:3,
    name:'Pavi',
    role:'Manager',
    location:'Mumbai'
  },

    {
    id:4,
    name:'Shalini',
    role:'Developer',
    location:'Hyderabad'
  }
]

//Retirve all the employee details

getEmp():Employee[]
{
  return this.employee
}

}

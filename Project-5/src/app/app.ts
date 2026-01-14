import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Service Demo';
  
  employee:Employee[]=[];

  constructor(private employeeService:EmployeeService)
  {
    this.employee = this.employeeService.getEmp();
  }

  courses:String[]=['Java','JFS','MERN Stack','MEAN Stack','Python'];

}

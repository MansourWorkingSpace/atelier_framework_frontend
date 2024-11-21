import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employees-s',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-employees-s.component.html',
  styleUrl: './list-employees-s.component.css',
})
export class ListEmployeesSComponent implements OnInit{
  employees: any;
  constructor(private employeesService : EmployeesService) {}
  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }
}

import { AuthService } from 'src/app/services/auth.service';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeElement } from 'src/app/models/employee.model';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'birthdate'];
  dataSource = new MatTableDataSource<EmployeeElement>([]);

  constructor(private employeeService: EmployeeService, private authService: AuthService) { }

  logout(): void {
    this.authService.logOut()
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    // Initializing the table data
    this.employeeService.getAllEmployees()
      .subscribe(
        (response: any) => {
          const employees = response.employees; // Access the "employees" array
          this.dataSource.data = employees;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Use the "!" operator to tell TypeScript it will be initialized

  ngAfterViewInit() {

  }


}

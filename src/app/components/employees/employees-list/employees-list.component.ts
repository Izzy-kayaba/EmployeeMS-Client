import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeElement } from 'src/app/models/employee.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'birthdate', 'actions'];
  dataSource = new MatTableDataSource<EmployeeElement>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Use the "!" operator to tell TypeScript it will be initialized
  @ViewChild(MatSort) sort!: MatSort; // Use the "!" operator to tell TypeScript it will be initialized

  constructor(private dialog: MatDialog, private employeeService: EmployeeService) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "100%"
    }).afterClosed() // Ensure that the dialog closes without refreshing
      .subscribe(
        value => {
          if (value === "update") {
            this.fetchAllEmployees
          }
        })
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  fetchAllEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe(
        (response: any) => {
          this.dataSource.data = response.employees; // Access the "employees" array
          this.dataSource.paginator = this.paginator; // Initialising the paginator
          this.dataSource.sort = this.sort; // Initialising the paginator
        },
        (error) => {
          // Handle the error here, e.g., display an error message.
          console.error('Error:', error);
        }
      );
  }

  editEmployee(row: any) {
    this.dialog.open(DialogComponent, {
      width: "100%",
      data: row
    });
  }

  removeEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe({
        next: (res) => {
          alert("Deleted")
          this.fetchAllEmployees()
        },
        error: () => {
          alert("Error")
        }
      })
  }

  ngOnInit(): void {
    this.fetchAllEmployees(); // Execute on useffect()[]
  }


}

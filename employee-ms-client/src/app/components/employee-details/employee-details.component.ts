import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
{ ActivatedRoute }

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
  ) {

  }

  employee: any = [];


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = parseInt(idParam, 10);

      if (!isNaN(id)) {
        this.employeeService.getEmployeeById(id).subscribe(
          (data) => {
            this.employee = data.employee;
            console.log(
              this.employee
            )
            
          },
          (error) => {
            console.error('Error fetching employee data:', error);
          }
        );
      } else {
        console.error('Invalid ID parameter');
      }
    } else {
      console.error('ID parameter is null or undefined');
    }
  }

}

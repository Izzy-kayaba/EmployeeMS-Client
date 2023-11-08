import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  actionTxt: string = "Save";
  startDate = null;
  EmployeeForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any // this will populate the data from edit button
  ) { }

  ngOnInit(): void {
    this.EmployeeForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      salary: ["", Validators.required],
      department: ["", Validators.required],
      birthdate: ["", Validators.required]
    })

    if (this.editData) {
      this.actionTxt = "Update";
      this.EmployeeForm.controls["name"].setValue(this.editData.name);
      this.EmployeeForm.controls["surname"].setValue(this.editData.surname);
      this.EmployeeForm.controls["email"].setValue(this.editData.email);
      this.EmployeeForm.controls["phone"].setValue(this.editData.phone);
      this.EmployeeForm.controls["salary"].setValue(this.editData.salary);
      this.EmployeeForm.controls["department"].setValue(this.editData.department);
      this.EmployeeForm.controls["birthdate"].setValue(this.editData.birthdate.slice(14));
    }

    console.log("date", this.editData)
  }

  UpdateEmployee() {
    if (this.EmployeeForm.valid) {
      this.employeeService.updateEmployee(this.EmployeeForm.value, this.editData.id)
        .subscribe({
          next: (res) => {
            alert("Updated !");
            this.EmployeeForm.reset();
            this.dialogRef.close("update")
          },
          error: () => {
            alert("Error ")
          }
        })
    }
  }

  createEmployee() {
    if (!this.editData) {
      if (this.EmployeeForm.valid) {
        this.employeeService.postEmployee(this.EmployeeForm.value)
          .subscribe({
            next: (res) => {
              alert("Done !");
              this.EmployeeForm.reset();
              this.dialogRef.close("save");
            },
            error: () => {
              alert("Error while adding employee")
            }
          })
      }
    }
    else {
      this.UpdateEmployee()
    }

  }

}

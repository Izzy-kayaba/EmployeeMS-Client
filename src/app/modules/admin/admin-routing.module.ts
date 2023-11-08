import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeesListComponent } from 'src/app/components/employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from 'src/app/components/employee-details/employee-details.component';
import { AnalyticsComponent } from 'src/app/components/analytics/analytics.component';


// All these routes are protected 
const routes: Routes = [
  {
    path: "", component: AdminDashboardComponent,
    children: [
      { path: "", component: EmployeesListComponent },
      { path: "employees", component: EmployeesListComponent },
      { path: "employees/:id", component: EmployeeDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

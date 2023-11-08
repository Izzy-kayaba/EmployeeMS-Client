import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  // { path: "registration", component: RegistrationComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "admin", canActivate: [AuthGuard],
    loadChildren: () => import("./modules/admin/admin.module")
      .then((m) => m.AdminModule)
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

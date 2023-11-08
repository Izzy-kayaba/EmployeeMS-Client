import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    LoginComponent,
    RegistrationComponent,
    EmployeeDetailsComponent,
    SidebarComponent,
    DialogComponent,
    AdminDashboardComponent,
    NotFoundComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSortModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { EmployeeElement } from 'src/app/models/employee.model';
import { Router } from '@angular/router';
import { error } from 'console';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailPattern: string = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  departments = ["HR", "IT"];
  errorMessage = "";

  userModel: User = new User("", "");

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["admin"])
    }
  }

  onSubmit(): void {
    this.authService.login(this.userModel)
      .subscribe(
        (response) => {
          // Authentication successful, redirect to the specified URL
          if (response && response.redirectUrl) {
            this.router.navigate([response.redirectUrl]);
          }
        },
        (error) => {
          // Handle authentication error
          if (error.status === 401 && error.error && error.error.redirectUrl) {
            // Unsuccessful redirection due to authentication failure
            this.router.navigate([error.error.redirectUrl]);
            this.errorMessage = error.statusText;
          } else {
            this.errorMessage = error.statusText;
          }
        }
      );
  }


}


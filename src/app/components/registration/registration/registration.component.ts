import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitted = false;

  emailPattern: string = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  departments = ["HR", "IT"];

  userModel: User = new User("", "");


  log(ref: any) {
    console.log("logging", ref)
  }

  onSubmit() {
    console.log("Submitted", this.userModel)
  }



  constructor() { }

  ngOnInit(): void {
  }

}

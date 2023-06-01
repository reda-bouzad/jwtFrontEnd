import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  // variables
  firstName: any;
  lastName: any;
  email: any;
  role: any;
  password: any;

  // on load
  ngOnInit(): void {
  }

  // constructor:
  public constructor(public authService:AuthService) {
  }

  // register()
  register(){
    this.authService.register(this.firstName, this.lastName, this.email, this.role, this.password).subscribe(
    )
  }

}

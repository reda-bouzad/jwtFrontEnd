import { Component } from '@angular/core';
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Variables
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService) {}


  login() {

  }
}

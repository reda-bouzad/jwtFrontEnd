import {Component, OnInit} from '@angular/core';
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // Variables
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService) {}



  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        this.authService.router.navigate(['/success']);
        this.authService.isLoggedIn();
      },
      (error) => {
        // Handle error, such as displaying an error message
      }
    );
  }

}

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
    // Perform login logic
    this.authService.login(this.email, this.password).subscribe(
      () => {
        // Login successful
        // Handle success, such as storing the JWT token and navigating to the main page
        // For example:
        console.log('Login successful');
        // Store the JWT token and navigate to the main page
        // You can access the token using this.authService.getToken() if it's exposed in the AuthService

        // Clear the form fields
        this.email = '';
        this.password = '';
      },
      (error) => {
        // Login failed
        console.log(this.email);
        console.log(this.password);
        // Handle error, such as displaying an error message
        console.log('Login failed');
        // Display an error message to the user
      }
    );
  }

}

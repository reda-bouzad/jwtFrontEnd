import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginComponent]
})
export class NavbarComponent implements OnInit{

  isLoggedIn: Boolean = this.authService.isLoggedIn();

  constructor(private authService:AuthService) {
  }





  ngOnInit(): void {

  }

}

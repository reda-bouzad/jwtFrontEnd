import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuccessComponent} from "./view/success/success.component";
import {RegisterComponent} from "./view/register/register.component";

const routes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

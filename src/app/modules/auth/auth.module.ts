import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    LoginModule,
    RouterModule
  ]
})
export class AuthModule { }

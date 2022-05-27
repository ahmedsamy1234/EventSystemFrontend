import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MatListModule
  ],
   exports : [LoginComponent,RegisterComponent]
})
export class RegistrationModule { }

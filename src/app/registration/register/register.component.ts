import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   userData={name: null,
    email: null,
    password: null}
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.userData);
   this.authService.registerUser(this.userData).subscribe(
    res => {
      
        this.isSuccessful = true;
        this.isSignUpFailed = false;
     },
      err => {

        console.log(err)
        this.errorMessage = err.error.message;
        //this.isSignUpFailed = true;
      }
     );
  }
}



import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { TokenStorageService } from 'src/app/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
    UserData: any = {
      email: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService,private tokenStorageService: TokenStorageService) { }
    ngOnInit(): void {
 
    }
    onSubmit(): void {
      // const { username, password } = this.form;
       this.authService.loginUser(this.UserData).subscribe(
         data   => {
          this.tokenStorageService.saveToken(data.token);
           this.tokenStorageService.saveUser(data);
           console.log("Hiiiiiiiii");
           this.isLoginFailed = false;
           this.isLoggedIn = true;
          // this.roles = this.tokenStorage.getUser().roles;
          // this.reloadPage();
         },
         err => {
           this.errorMessage = err.error.message;
           this.isLoginFailed = true;
         })
      
      


    
    }
  }

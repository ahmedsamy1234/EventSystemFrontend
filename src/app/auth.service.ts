import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  
  private _registerUrl='http://localhost:7013/';
  constructor(private http : HttpClient) { 
  
}
registerUser(user : any)
{
  return this.http.post<any>(this._registerUrl+"students",user);
}

loginUser(user : any)
{
  return this.http.post<any>(this._registerUrl+'login',user);
}

}

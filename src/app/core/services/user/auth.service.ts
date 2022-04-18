import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../shared/constants";
import {JWToken} from "../../../models/token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginForm:any){
    return this.http.post<JWToken>(`${Constants.BASE_API_URL}/auth/login`,loginForm, {observe: 'response'})
  }
  signup(signupForm: any){
    return this.http.post<any>(`${Constants.BASE_API_URL}/auth//signup`,signupForm, {observe: 'response'})
  }
}

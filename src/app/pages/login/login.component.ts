import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/user/auth.service";
import jwt_decode from "jwt-decode";
import {JWToken} from "../../models/token.model";
import {Router} from "@angular/router";
import {JWT} from "../../models/jwt.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failed: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.failed= false;
    console.log(this.loginForm)
    console.log(this.loginForm.value)
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(res => {
        let token = res.body;
        let decodeToken = jwt_decode(<string>res.body?.token);
        console.log()

        // save the token to local storage
        localStorage.setItem('jwt', <string>res.body?.token);

        // To laod token from local storage
        // let decodedToken2 = <JWT> jwt_decode(<string>localStorage.getItem('jwt'));
        // console.log(decodedToken2);

        // redirect user to dashboard
        this.router.navigateByUrl('/dashboard');

      },error => {
        console.log(error);
        this.failed= true;
      })
    }
  }

}

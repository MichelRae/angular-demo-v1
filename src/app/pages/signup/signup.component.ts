import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  termCondition: boolean = false;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password1: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.signupForm)
    console.log(this.signupForm.value)
  }

  get f(){
    return this.signupForm.controls;
  }

  changeCheckBox(e: any) {
    console.log(e.target.value)
    this.termCondition = e.target.value;
  }
}

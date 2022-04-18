import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import jwt_decode from "jwt-decode";
import {JWT} from "../../../../models/jwt.model";
import {Tag} from "../../../../models/tag.model";
import {CourseServiceService} from "../../../services/course/course-service.service";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  submitted: boolean = false;
  failed: boolean = false;
  loadSpinner: boolean = false;
  newCourseForm: FormGroup;
  tags: Tag[] =[
    {id: 1, name: 'Java'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'Python'},
  ]
  constructor(private fb:FormBuilder, private courseService: CourseServiceService) {
    let token =  <JWT>jwt_decode(<string>localStorage.getItem('jwt'))
    this.newCourseForm = fb.group({
      title : ['', [Validators.required]],
      // courseImageURL: ['', [Validators.required]],
      skillLevel: [1, [Validators.required]],
      price: [],
      tags:[this.tags],
      authorId:[token.userId],
      courseCategory: [0,[Validators.required]],
      isActive: [true,[Validators.required]]
    })
  }

  ngOnInit(): void {


  }

  submit() {
    this.failed = false;
    this.submitted = true;
    this.loadSpinner = true;
    console.log(this.newCourseForm)
    console.log(this.newCourseForm.value)
    //
    this.courseService.save(this.newCourseForm.value).subscribe(res => {
      console.log('Course created !')
      console.log(res)
      this.loadSpinner = false;
    },error => {
      console.log(error)
      this.failed = true;
    })
  }

  updateCourseStatus($event: any) {
    console.log('course now is: ')
    console.log($event.target?.value)
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  editCourseForm: FormGroup
  constructor(private fb:FormBuilder) {
    this.editCourseForm = fb.group({
      title : ['', [Validators.required]],
      skillLevel: ['', [Validators.required]],
      price: ['',[Validators.required]],
      courseCategory: ['',[Validators.required]],
      isActive: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

}

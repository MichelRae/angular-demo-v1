import { Component, OnInit } from '@angular/core';
import {Course} from "../../../../models/course.model";
import {CourseServiceService} from "../../../services/course/course-service.service";
import {filter} from "rxjs";
import {JWT} from "../../../../models/jwt.model";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses !: Course[] | undefined;

  constructor(private courseService: CourseServiceService) { }

  ngOnInit(): void {
    // let token = <JWT> jwt_decode(<string> localStorage.getItem('jwt'));
    // let filterOption = {
    //   page: 0,
    //   size: 10,
    //   order: 'ASC',
    //   authorId: token.userId
    // }
    // // this.courseService.getAll(filterOption).subscribe(value => {
    // //   console.log(value);
    // //   this.courses = value.body?.content;
    // // })
  }

}

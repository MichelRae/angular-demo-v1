import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Course, User} from "../models/course.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.scss']
})
export class CoursesDashboardComponent {

  user: User = {
    id: 1, username: 'user', email:''
  }
  courses: Course[] = [

  ]
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}

  editCourse(id: number) {
    this.router.navigateByUrl('edit-course/'+id);
  }
}

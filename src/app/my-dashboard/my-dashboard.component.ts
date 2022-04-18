import {Component, Input} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Course, User} from "../models/course.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  user: User = {
    id: 1, username: 'user', email:''
  }
  courses: Course[] = [
  ]
  /** Based on the screen size, switch from standard to one column per row */

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}

  editCourse(id: number) {
    this.router.navigateByUrl('dashboard/courses/edit-course/'+id);
  }

  createCourse() {
    this.router.navigateByUrl('dashboard/courses/create-course');
  }
}

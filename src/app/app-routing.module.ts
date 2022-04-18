import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './core/layouts/course-layout/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomeContainerComponent} from "./pages/home-container/home-container.component";
import {DahsboardContainerComponent} from "./pages/dahsboard-container/dahsboard-container.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {AccountComponent} from "./pages/account/account.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CompletedComponent} from "./pages/completed/completed.component";
import {FlagsComponent} from "./pages/flags/flags.component";
import {CourseContainerComponent} from "./core/layouts/course-layout/course-container/course-container.component";
import {CreateCourseComponent} from "./core/layouts/course-layout/create-course/create-course.component";
import {CourseDetailsManagmentComponent} from "./core/layouts/course-layout/course-details-managment/course-details-managment.component";
import {EditCourseComponent} from "./core/layouts/course-layout/edit-course/edit-course.component";
import {AuthGuard} from "./core/helpers/gaurds/auth.guard";
import {LoggedGuard} from "./core/helpers/gaurds/logged.guard";

const routes: Routes = [
  {path: '' , component: HomeContainerComponent,canActivate:[LoggedGuard],children: [
      {path:'', component: HomeComponent},
      {path:'login', component: LoginComponent},
      {path:'signup', component: SignupComponent},
      {path: 'about' , component:AboutComponent },
      {path: 'instructors' , component:InstructorsComponent },
      {path: 'courses' , component:CoursesComponent },
      {path: 'contact' , component:ContactComponent },
    ]  },
      {path: 'dashboard' , component:DahsboardContainerComponent, canActivate: [AuthGuard],children: [
      {path:'', component: DashboardComponent},
      {path:'profile', component: ProfileComponent},
      {path:'account', component: AccountComponent},
      {path:'settings', component: SettingsComponent},
      {path:'my-learning', component: CoursesComponent},
      {path:'completed', component: CompletedComponent},
      {path:'flags', component: FlagsComponent},
      {path:'courses', component: CourseContainerComponent, children: [
          {path:'', component: CoursesComponent},
          {path:'create-course', component: CreateCourseComponent},
          {path:'course-details', component: CourseDetailsManagmentComponent},
          {path:'edit-course/:id', component: EditCourseComponent},
        ] },
      // {path:'reports', component: DashboardComponent},
    ] },
    {
      path :'**' , redirectTo: 'login'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

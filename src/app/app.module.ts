import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './core/layouts/course-layout/courses/courses.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeroComponent } from './components/hero/hero.component';
import { CourseComponent } from './components/course/course.component';
import { CardComponent } from './components/card/card.component';
import { AuthorComponent } from './components/author/author.component';
import { AboutCourseComponent } from './components/about-course/about-course.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AcountComponent } from './pages/acount/acount.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ReportsComponent } from './pages/reports/reports.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './pages/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import {HttpClientModule} from "@angular/common/http";
import { DahsboardContainerComponent } from './pages/dahsboard-container/dahsboard-container.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { FlagsComponent } from './pages/flags/flags.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { CourseContainerComponent } from './core/layouts/course-layout/course-container/course-container.component';
import { CreateCourseComponent } from './core/layouts/course-layout/create-course/create-course.component';
import { CourseDetailsComponent } from './core/layouts/course-layout/course-details/course-details.component';
import { CourseDetailsManagenentComponent } from './core/layouts/course-layout/course-details-managenent/course-details-managenent.component';
import { CourseDetailsManagmentComponent } from './core/layouts/course-layout/course-details-managment/course-details-managment.component';
import { EditCourseComponent } from './core/layouts/course-layout/edit-course/edit-course.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    InstructorsComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    HeroComponent,
    CourseComponent,
    CardComponent,
    AuthorComponent,
    AboutCourseComponent,
    SidebarComponent,
    AcountComponent,
    DashboardComponent,
    BlogComponent,
    ReportsComponent,
    NavigationComponent,
    AdminComponent,
    MyDashboardComponent,
    HomeContainerComponent,
    ForgetPasswordComponent,
    DahsboardContainerComponent,
    ProfileComponent,
    AccountComponent,
    SettingsComponent,
    MyLearningComponent,
    FlagsComponent,
    CompletedComponent,
    CourseContainerComponent,
    CreateCourseComponent,
    CourseDetailsComponent,
    CourseDetailsManagenentComponent,
    CourseDetailsManagmentComponent,
    EditCourseComponent,
    CoursesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

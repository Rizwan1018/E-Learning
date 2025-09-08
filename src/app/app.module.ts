import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseManagementComponent } from './pages/course-management/course-management.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { InstructorModule } from './instructor/instructor.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseManagementComponent,
    LandingComponent,
    LoginComponentComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    InstructorModule
  ],
  providers: [HttpClient,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

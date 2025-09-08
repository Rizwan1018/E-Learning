import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './pages/course-management/course-management.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponent } from './signup/signup.component';
import { CourseCreateComponent } from './instructor/cources/course-create/course-create.component';
const routes: Routes = [
  {
    path:'', component:LandingComponent
  },
  
  {
    path:'home', component:LandingComponent
  },

  {
    path:'courses', component:CourseManagementComponent
  },
  {
    path:'login', component:LoginComponentComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'createcourse', component:CourseCreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

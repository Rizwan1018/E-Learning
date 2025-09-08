import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCreateComponent } from './cources/course-create/course-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CourseCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[CourseCreateComponent]
})
export class InstructorModule { }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Course } from '../../../shared/models/course.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-create',
  standalone: false,
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.css'
})
export class CourseCreateComponent {

  title = "Rizwan"

  courseForm:FormGroup;
  selectedFileUrl: string | null = null;
  apiUrl = 'http://localhost:3000/cources';

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router){
    this.courseForm = this.fb.group({
      title:['', Validators.required],
      description:['',Validators.required]
    });
  }

  onFileSelected(event:any){
    const file = event.target.files[0];
    if(file){
      this.selectedFileUrl = URL.createObjectURL(file);
    }
  }

  onSubmit(){
    if(this.courseForm.valid){
      const newCourse:Course = {
        ...this.courseForm.value,
        contentUrl: this.selectedFileUrl || '',
        intstructorId : 1
      };

      this.http.post<Course>(this.apiUrl, newCourse).subscribe(()=>{
        alert('Course Created Successfully');
        this.router.navigate(['/instructor/cources']);
      });
    }
  }

  disp:boolean=false;
  displayCreateCourse(){
    this.disp = !this.disp;
  }

}

import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

 user = {
    name:'',
    email:'',
    password:'',
  };

  constructor(private authServiceObj: AuthService, private router:Router){

  }
  onSignUp(){
    this.authServiceObj.singup(this.user).subscribe()

    this.router.navigate(['/login'])
  }
}

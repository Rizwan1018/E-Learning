import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  loginData = {
    email:'',
    pass:''
  }

  constructor(private loginService:AuthService, private router:Router) { }

  logIn(){
    if(!this.loginData.email || !this.loginData.pass){
      alert("Enter all required fields");
      return;
    }

    this.loginService.login(this.loginData.email, this.loginData.pass).subscribe(
      {
        next: (res:any) =>{
          if(res.length > 0){
            alert("login success")

            this.router.navigate(['/createcourse'])
          }
        },
        error: (err:any) =>{
          alert("Invalid Credentials")
        }
      }
      
      
    )
  }

}

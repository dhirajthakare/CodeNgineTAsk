import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MiddlewareserviceService } from '../service/middlewareservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor( 
    private fb:FormBuilder ,
    private service : MiddlewareserviceService,
    private router : Router
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedin')=="true"){
      this.router.navigate(['project/department']);

    }
  
  }
  reset(){
    this.login.reset();
  }

  login = this.fb.group({
  
    Email:[''],
    Password:[''],
   
  })
 
error:any;
  onLogin(){

    let fdata = {
      "Email":this.login.get('Email')?.value,
      "Password":this.login.get('Password')?.value,
    }

    this.service.login(fdata).subscribe(res=>{
      console.log(res);
      this.login.reset();
      localStorage.setItem('loggedin',"true");

      this.router.navigate(['/project/department'])
    },err=>{
      console.log(err);
      this.error = err.error;
      console.log(this.error);
    })

    
  
  }

}

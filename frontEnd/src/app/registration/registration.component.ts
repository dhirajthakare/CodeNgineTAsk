import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MiddlewareserviceService } from '../service/middlewareservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


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
    this.registration.reset();
  }

  registration = this.fb.group({
    id:[''],
    Name:[''],
    Email:[''],
    Password:[''],
   
  })
 
error:any;
  onsubmit(){

    let fdata = {
      "Name":this.registration.get('Name')?.value,
      "Email":this.registration.get('Email')?.value,
      "Password":this.registration.get('Password')?.value,
    }

    this.service.register(fdata).subscribe(res=>{
      console.log(res);
      this.registration.reset();
      this.router.navigate(['/project/login']);
    },err=>{
      console.log(err);
      this.error = err.error;
    })
    
  
  }
 

}

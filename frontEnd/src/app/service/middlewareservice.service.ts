import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareserviceService {

  constructor( private http : HttpClient) { }

  storedata:any;
   baseurl = 'http://localhost:3000/register';
   LoginUrl = 'http://localhost:3000/login';
   departmentUrl = 'http://localhost:3000/department/';
   userUrl = 'http://localhost:3000/user/';




  register(Userdata:any){
    return this.http.post(this.baseurl,Userdata);
  }

  login(formdata:any){
    return this.http.post(this.LoginUrl ,formdata );
  }
  department(){
    return this.http.get(this.departmentUrl);
  }
  departmentdetails(id:any){
    return this.http.get(this.departmentUrl+id);
  }
  
  users(){
    return this.http.get(this.userUrl);
  }
  usersdetails(id:any){
    return this.http.get(this.userUrl+id);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiddlewareserviceService } from '../service/middlewareservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navicateRoute:Router,
    private service :MiddlewareserviceService
  ) { }

 
  checkloged:any = false;
  ngOnInit(): void {

    

  }

  logout(){
    if(confirm("Are You sure You Want To Logout ? ")){
      localStorage.removeItem('loggedin');
     this.navicateRoute.navigate(['/project/login']);
    }
  }
}

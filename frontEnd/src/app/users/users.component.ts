import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from '../service/middlewareservice.service';
import { GridDataResult , PageChangeEvent} from '@progress/kendo-angular-grid';
import {SortDescriptor} from '@progress/kendo-data-query';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private service:MiddlewareserviceService,
    private route:Router,
    public dialog:MatDialog

  ) { }
  data:any;
    id:any;
  ngOnInit(): void {
    if(localStorage.getItem('loggedin')!="true"){
      localStorage.setItem('error',"You need To Login")
      this.route.navigate(['/project/login']);
    }
    this.gtdepartment();
  }
  gtdepartment(){
   this.service.users().subscribe(res=>{
  this.data = res;
  console.log(this.data);
   })
}

opendia(id){
  const dialogRef = this.dialog.open(UserDetailsComponent , {
    width: '500px',

    data: {id:id},
    
  });
  
}

}

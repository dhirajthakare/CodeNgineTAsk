import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from '../service/middlewareservice.service';
import { GridDataResult , PageChangeEvent} from '@progress/kendo-angular-grid';
import {SortDescriptor} from '@progress/kendo-data-query';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(
    private service:MiddlewareserviceService,
    private route : Router,
    public dialog: MatDialog
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
   this.service.department().subscribe(res=>{
  this.data = res;
  console.log(this.data);
   })
}

opendia(id){
  const dialogRef = this.dialog.open(DepartmentDetailComponent , {
    width: '500px',
    data: {id:id},
    
  });

  
  
  
}

}

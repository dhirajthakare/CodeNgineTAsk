import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';
import { DepartmentsComponent } from '../departments.component';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor(
    private service :MiddlewareserviceService,
    private activrouter : ActivatedRoute,
    public dialogRef: MatDialogRef<DepartmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any
  ) { }

  ngOnInit(): void {
    this.activrouter.params.subscribe(res=>{
      console.log(res);
      this.getdetails(res.id);
    })
  }
  data:any;
  getdetails(id:any){
      this.service.departmentdetails(this.data1.id).subscribe(res=>{
        this.data = res;
        console.log(this.data);
      })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

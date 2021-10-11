import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private service :MiddlewareserviceService,
    private activrouter : ActivatedRoute,
    public dialogRef: MatDialogRef<UsersComponent>,
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
    console.log(this.data1.id);
      this.service.usersdetails(this.data1.id).subscribe(res=>{
        this.data = res;
        console.log(this.data);
      })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

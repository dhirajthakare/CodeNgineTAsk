import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { UsersComponent } from './users/users.component';
import { MatSlider, MatSliderModule } from '@angular/material/slider'
import { MatDialogModule } from '@angular/material/dialog'

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    UsersComponent,
    LoginComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

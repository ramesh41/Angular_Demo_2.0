import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormDataComponent } from './form-data/form-data.component';
import { SessionManagementService } from '../app/shared/session-managment.service';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { HeaderComponent } from './header/header.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { GetEmployeeService } from '../app/shared/services/get-employee.service';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    PrimaryButtonComponent,
    HeaderComponent,
    SearchEmployeeComponent,
    ProfileComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/error', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'getEmployee', component: SearchEmployeeComponent },
      { path: 'addEmployee', component: FormDataComponent },
      { path: 'error', component: ErrorPageComponent  },
    ]),
  ],
  providers: [SessionManagementService, GetEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

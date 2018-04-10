import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '../profile/profile.component';
import {SearchEmployeeComponent} from '../search-employee/search-employee.component';
import {FormDataComponent} from '../form-data/form-data.component';

export const ROUTES: Routes = [
  {
    path: '', redirectTo: '/getEmployee',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'getEmployee',
    component: SearchEmployeeComponent
  },
  {
    path: 'addEmployee',
    component: FormDataComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: []
})

export class RouterModule {}

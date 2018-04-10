import { Component, OnInit } from '@angular/core';
import { GetEmployeeService } from '../shared/services/get-employee.service';
import { SessionManagementService } from '../shared/session-managment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userInfo: any;
  public getEmployeeName: any;

  constructor(private getEmployeeService: GetEmployeeService, private sessionManagementService: SessionManagementService) { }

  ngOnInit() {
    this.getEmployeeName = this.sessionManagementService.getSessionObject('empData');
    this.getEmployeeService.getEmpDetails(this.getEmployeeName.login)
      .subscribe(res => {
        console.log('****************');
        console.log(res);
        this.userInfo = res;
    });
  }
}

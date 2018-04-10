import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { GetEmployeeService } from '../shared/services/get-employee.service';
import { SessionManagementService } from '../shared/session-managment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  findUsersData: FormGroup;
  userCollections = [];
  public message: string;
  public noDataFlag = false;
  public loadingBar: boolean;
  constructor(private _fb: FormBuilder, private getEmployeeService: GetEmployeeService,
              private router: Router, private sessionManagementService: SessionManagementService) { }

  ngOnInit() {
    const namePattern = /^[a-zA-Z0-9 ]{3,30}$/;
    this.findUsersData = this._fb.group({
      searchUsername: ['', Validators.compose([Validators.required, Validators.pattern(namePattern)])]
    });
    this.message = 'Services has been called from client';
  }

  getUserList(userData) {
    if (userData.valid) {
      this.loadingBar = true;
      setTimeout(() => {
        this.getEmployeeService.findUserInformation(userData.value.searchUsername).subscribe( res => {
          console.log(res);
          if (res[2] && res[2].length > 0) {
            this.loadingBar = false;
            this.userCollections = res[2];
          } else {
            this.userCollections = [];
          }
        });
      }, 1000);
    } else {
      alert('We need correct data format to continue');
    }
  }
  viewUserDetails(employee) {
    this.getEmployeeService.setUserInformation(employee);
    this.sessionManagementService.setSessionObject('empData', employee );
    this.router.navigate(['profile']);
  }
}


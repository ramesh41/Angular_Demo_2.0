import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { SessionManagementService } from '../shared/session-managment.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})

export class FormDataComponent implements OnInit {
  validateMessages: any;
  usersList = [];
  public users;
  public buttonTitle: string;
  public usersObj;
  public spinnerDisabled = false;
  public spinnerIcons = false;
  firstFormData: FormGroup;


  constructor(private _fb: FormBuilder, private sessionManagementService: SessionManagementService) {
    this.validateMessages = {
      username: {
        required: 'We need your username to contniue',
        minLength: 'Mininum length should be 5',
        maxLength: 'Max length should be 30',
        pattern: 'gfgf'
      },
      password: {
        required: 'We need your password to contniue',
        minLength: 'password Mininum length should be 5',
        maxLength: 'password Max length should be 30',
        pattern: 'fg'
      }
    };
  }

  ngOnInit() {
    this.buttonTitle = 'Submit User Data';
    this.users = this.sessionManagementService.getSessionObject('userData');
    this.usersList = this.users;
    const emailPattern = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' +
      '{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    this.firstFormData = this._fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern(namePattern)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern(namePattern)])],
      emailAddress: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
    });
  }

  sendDataToServer(firstFormData) {
    if (firstFormData.valid) {
      this.spinnerIcons = true;
      this.spinnerDisabled = true;
      setTimeout(() => {
        this.usersObj = this.sessionManagementService.getSessionObject('userData');
        if (!this.usersObj) {
          this.usersObj = [];
          this.usersObj.push(firstFormData.value);
        } else {
          this.usersObj.push(firstFormData.value);
        }
        this.sessionManagementService.setSessionObject('userData', this.usersObj);
         this.usersList = this.sessionManagementService.getSessionObject('userData');
        if (this.usersList && this.usersList.length > 0) {
          this.spinnerDisabled = false;
          this.spinnerIcons = false;
        }
      }, 1000);
    }
  }

  removedItem(index, usersList) {
    usersList.splice(index, 1);
    this.sessionManagementService.setSessionObject('userData', usersList);
    this.usersList = this.sessionManagementService.getSessionObject('userData');
  }
  updateUser(usersList) {
    this.buttonTitle = 'Update User Data';
    const emailPattern = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' +
      '{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    this.firstFormData = usersList;
    this.firstFormData = this._fb.group({
      firstName: [usersList.firstName, Validators.compose([Validators.required, Validators.pattern(namePattern)])],
      lastName: [usersList.lastName, Validators.compose([Validators.required, Validators.pattern(namePattern)])],
      emailAddress: [usersList.emailAddress, Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
    });
  }
}

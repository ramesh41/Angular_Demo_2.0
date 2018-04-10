import {Injectable, ErrorHandler} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetEmployeeService {
  public getUser;

  constructor(private httpClient: HttpClient) {
  }
  setUserInformation(userInfo) {
    this.getUser = userInfo;
  }

  getUserInformation() {
    return this.getUser;
  }

  findUserInformation(searchUsername) {
    return this.httpClient.get(environment.GET_USER_LIST_URL+searchUsername)
      .map((Response) => {
        return Object.values(Response);
      }).catch((error: any) => {
        return this.errorHandler(error);
      });
  }

  getEmpDetails(searchUsername) {
    return this.httpClient.get(environment.GET_PARTICULAR_USERS_DETAILS_URL+searchUsername)
      .map((res) => {
        return res;
      }).catch((error: any) => {
        return this.errorHandler(error);
      });
  }

  errorHandler(error) {
    return Observable.throw(error);
  }
}

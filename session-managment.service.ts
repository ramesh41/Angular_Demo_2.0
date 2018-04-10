import {Injectable} from '@angular/core';

@Injectable()
export class SessionManagementService {
  public testData: any;
  constructor() {
  }


  set setDisplayIcons(data: any) {
    this.testData = data;
  }

  get getDisplayIcons() {
    return this.testData;
  }

  setSessionObject(setObjKey: string, setObjValue) {
    sessionStorage.setItem(setObjKey, JSON.stringify(setObjValue));
  }

  getSessionObject(getObjKey: string) {
   return JSON.parse(sessionStorage.getItem(getObjKey));
  }

  removedSessionObject(setObjKey: string) {
    sessionStorage.removeItem(setObjKey);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { WindowRef } from './liverides/WindowRef';


@Injectable()
export class LiveridesService {

  constructor(private http: Http, private winRef: WindowRef) {

  }
  getLiveRidesPosions() {
    const self = this;
    return self.http.get("http://localhost:3000/liverides");
  }
  updateMyPos(data) {
    return this.http.post("http://localhost:3000/liverides/userPos",data);
  }




}

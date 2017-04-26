import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { APP_CONFIG } from './app.config';



@Injectable()
export class LiveridesService {

  constructor(private http: Http) {

  }
  getLiveRidesPosions() {
    const self = this;
    return self.http.get(`${APP_CONFIG.serverDomain}liverides`);
  }
  updateMyPos(data) {
    return this.http.post(`${APP_CONFIG.serverDomain}liverides/userPos`,data);
  }




}

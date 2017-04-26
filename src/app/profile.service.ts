import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { APP_CONFIG } from './app.config';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {
  }

  getAllUsers() {

    return this.http.get(`${APP_CONFIG.serverDomain}users`);

  }

  saveProfile(profile) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${APP_CONFIG.serverDomain}users`, profile);
  }

}

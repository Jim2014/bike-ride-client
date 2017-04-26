import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {
  }

  getAllUsers() {

    return this.http.get('http://localhost:3000/users');

  }

  saveProfile(profile) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:3000/users', profile);
  }

}

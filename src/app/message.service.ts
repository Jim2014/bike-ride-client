import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { APP_CONFIG } from './app.config';


@Injectable()
export class MessageService {

  constructor(private http:Http) { }
  getChats(user){
    return this.http.get(`${APP_CONFIG.serverDomain}chat/${user}`);
  }
}

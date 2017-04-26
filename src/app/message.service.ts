import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MessageService {

  constructor(private http:Http) { }
  getChats(user){
    var url = "http://localhost:3000/chat/"+user;
    //console.log('url',url);
    return this.http.get(url);
  }
}

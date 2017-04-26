import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { WindowRef } from './WindowRef';
@Injectable()
export class ClubsService {

  constructor(private pos:any, public http: Http, private winRef: WindowRef) { 
    this.pos = this.winRef.nativeWindow.curUserPositon;
    console.log(this.pos);
  }

  public getClubsNearby() {
    //todo http    
    return this.http.get("localhost:3000/clubs", this.pos);
  }

  public createClub() {
    return this.http.post("localhost:3000/clubs", this.pos);
  }
}

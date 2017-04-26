import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { WindowRef } from './WindowRef';
@Injectable()
export class ClubsService {
  private location:any;
  constructor(public http: Http, private winRef: WindowRef) { 
    
  }  
  updateLocation(position){
      this.location = position;
      console.log(position);
  }
    
  public getClubsNearby() {
    let data : any = {};
    data.loc = [];
    data.loc[0] = this.location.latitude;
    data.loc[1] = this.location.longitude;    
    return this.http.post("http://localhost:3000/clubs/nearby", data);            
  }

  public createClub(name:string) {
    let club : any;
    club.name = name;
    club.loc = [];
    club.loc[0] = this.location.latitude;
    club.loc[1] = this.location.longitude;
    // return this.http.post("http://localhost:3000/clubs/create", club);
    return this.http.post("http://localhost:3000/clubs/create", "");
  }

  public join(club) {
    let data : any = {};
    data.userId = 111;
    data.club = club;
    return this.http.post("http://localhost:3000/clubs/join", data);
  }


}

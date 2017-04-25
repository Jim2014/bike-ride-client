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
    return this.http.post("http://localhost:3000/clubs/nearby", this.location);            
  }

  public createClub(club:any) {
    club.loc = [];
    club.loc[0] = this.location.latitude;
    club.loc[1] = this.location.longitude;
    return this.http.post("http://localhost:3000/clubs", club);
  }

  public join(clubId : number) {
    return this.http.post("http://localhost:3000/clubs/join", clubId);
  }


}

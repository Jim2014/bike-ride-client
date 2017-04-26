import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { WindowRef } from './WindowRef';
import { AuthService } from './auth/auth.service';
import { ClubModel } from "app/clubs/clubModel";
import { EventModel } from "app/club-profile/EventModel";
@Injectable()
export class ClubsService {
  private location:any;
  public curClub: ClubModel;
  constructor(public http: Http, private winRef: WindowRef, private auth : AuthService) { 
    
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

  public createClub(name:any) {
    console.log("createClub");
    let club = new ClubModel();
    club.name = name;
    club.loc[0] = this.location.latitude;
    club.loc[1] = this.location.longitude;
    club.owner = this.getUserName();
    return this.http.post("http://localhost:3000/clubs/create", club);
  }

  public join(club:ClubModel) {
    this.curClub = club;
    let data : any = {};
    let p :any = {};
    data.userId = this.getUserName();
    data.club = club;
    return this.http.post("http://localhost:3000/clubs/join", data);
  }

  public getUserName() {
    return "testUser" + Math.random() * 10;
  }

  public createEvent(eventName:string) {
    let event = new EventModel();
    event.clubId = this.curClub._id; 
    event.name = eventName;
    event.loc = [this.location.latitude, this.location.longitude];
    event.members.push(this.getUserName());
    event.createTime = new Date();
    return this.http.post("http://localhost:3000/events/create", event);
  }

  public joinEvent(clubModel:ClubModel) {
    return this.http.post("http://localhost:3000/events/join", clubModel);
  }
}

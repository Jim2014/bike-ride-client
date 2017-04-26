import { Component, OnInit } from '@angular/core';
import { ClubsService } from "app/clubs.service";
import { ClubModel } from "app/clubs/clubModel";
import { EventModel } from "app/club-profile/EventModel";

@Component({
  selector: 'app-club-profile',
  templateUrl: './club-profile.component.html',
  styleUrls: ['./club-profile.component.css']
})
export class ClubProfileComponent implements OnInit {
  private curClub : ClubModel;
  private eventName: string;
  constructor(private clubService : ClubsService) { }

  ngOnInit() {
    this.curClub = this.clubService.curClub;
  }

  onclick_joinEvent(index:any) {
    console.log("onclick_joinEvent(event) {")
    console.dir(index);
    this.curClub.events[index].members.push(this.clubService.getUserName());

    // server todo
    let self = this;
    this.clubService.joinEvent(this.curClub).subscribe(
      res => {
        console.log("join event success!!!");
        let data:any = res.json();
        console.log(data);
      },
      err => console.log(err)      
    );    
  }

  onclick_createEvent() {
    console.log("create event");  
    console.log(this.eventName);  
    this.clubService.createEvent(this.eventName).subscribe(        
      res => {
        console.log("create club res");
        let data:any = res.json;
        console.log(data);
      },
      err => console.log(err)      
    );
  }    

}

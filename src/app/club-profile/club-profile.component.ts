import { Component, OnInit } from '@angular/core';
import { ClubsService } from "app/clubs.service";
import { ClubModel } from "app/clubs/clubModel";

@Component({
  selector: 'app-club-profile',
  templateUrl: './club-profile.component.html',
  styleUrls: ['./club-profile.component.css']
})
export class ClubProfileComponent implements OnInit {
  private curClub : ClubModel;
  private eventName: String;
  constructor(private clubService : ClubsService) { }

  ngOnInit() {
    this.curClub = this.clubService.curClub;
  }

  onclick_joinEvent(index:any) {
    console.log("onclick_joinEvent(event) {")
    console.dir(index);

    // server todo
    // let self = this;
    // this.club.join(this.clubs[index]).subscribe(
    //   res => {
    //     console.log("join success!!!");
    //     let data:any = res.json();
    //     console.log(data);

    //     // redirect
    //     self.router.navigate(["clubprofile"]);
    //   },
    //   err => console.log(err)      
    // );    
  }

  onclick_createEvent() {
    console.log("create event");  
    console.log(this.eventName);  
    // this.club.createClub(this.eventName).subscribe(        
    //   res => {
    //     console.log("create club res");
    //     let data:any = res.json;
    //     console.log(data);
    //   },
    //   err => console.log(err)      
    // );
  }    

}

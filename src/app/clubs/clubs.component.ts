import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClubsService } from '../clubs.service';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs:[any];
  
  clubName = "club name";
  
  constructor(public club:ClubsService, public router : Router) { }

  ngOnInit() {

    let self = this;
    navigator.geolocation.getCurrentPosition(function(position) {      
      self.club.updateLocation(position.coords);
      self.club.getClubsNearby().subscribe(
        res => {
          let data:any = res.json();
          console.log(data);
          self.clubs = data;        
        },
        err => console.log(err)
      )              
    });
  }

  onclick_joinClub(index:any) {
    console.log("onclick_joinClub(club) {")
    console.dir(index);

    // server todo
    let self = this;
    this.club.join(this.clubs[index]).subscribe(
      res => {
        console.log("join success!!!");
        let data:any = res.json();
        console.log(data);
        self.router.navigate([""])
      },
      err => console.log(err)      
    );    

    // redirect
    

  }

  onSubmit(form) {
    console.log("create club");  
    console.log(form.value.name);  
    this.club.createClub(form.name).subscribe(        
      res => {
        console.log("create club res");
        let data:any = res.json;
        console.log(data);
      },
      err => console.log(err)      
    );
  }  

}

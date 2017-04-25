import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs:[string];
  constructor(public club:ClubsService) { }

  ngOnInit() {
    this.club.getClubsNearby().subscribe(
      res => {
        let data:any = res.json;
        console.log(data);
        this.clubs = data.clubs;
        
      },
      err => console.log(err)
    )  
  }

  onSubmit(form) {
    console.log(form.value);  
    this.club.createClub().subscribe(
      res => {
        let data:any = res.json;
        console.log(data);

      },
      err => console.log(err)      
    );
  }  

}

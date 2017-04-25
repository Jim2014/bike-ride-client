// import { Component, OnInit } from '@angular/core';
// import { ClubsService } from '../clubs.service';
// @Component({
//   selector: 'app-clubs',
//   templateUrl: './clubs.component.html',
//   styleUrls: ['./clubs.component.css']
// })
// export class ClubsComponent implements OnInit {
//   clubs:[any];
//   constructor(public club:ClubsService) { }

//   ngOnInit() {
//     //mock
//     this.clubs = [
//       {name : "club1", id : 1},
//       {name : "club2", id : 2},
//       {name : "club3", id : 3},
//     ]

//     this.club.getClubsNearby().subscribe(
//       res => {
//         let data:any = res.json;
//         console.log(data);
//         // this.clubs = data.clubs;
        
//       },
//       err => console.log(err)
//     )  
//   }

//   onclick_joinClub(clubId:number) {
//     console.log("onclick_joinClub(club) {")
//     console.dir(clubId);

//     // server todo
//     this.club.join(clubId).subscribe(
//       res => {
//         console.log("join success!!!");
//         let data:any = res.json;
//         console.log(data);

//       },
//       err => console.log(err)      
//     );    

//     // redirect
//   }

//   onSubmit(form) {
//     console.log(form.value);  
//     this.club.createClub().subscribe(
//       res => {
//         let data:any = res.json;
//         console.log(data);

//       },
//       err => console.log(err)      
//     );
//   }  

// }

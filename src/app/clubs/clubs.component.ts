import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  club = {
    name: '',
  };

  constructor() { }

  ngOnInit() {

  }

  onSubmit(form) {
    console.log(form.value);
  }  

}

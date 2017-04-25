import { Component, OnInit } from '@angular/core';
import {WindowRef} from './WindowRef';

@Component({
  selector: 'app-liverides',
  templateUrl: './liverides.component.html',
  styleUrls: ['./liverides.component.css']
})
export class LiveridesComponent implements OnInit {

  constructor(private winRef: WindowRef) { 
    
    winRef.nativeWindow.ridesPositons = [
        {lat: 52.511, lng: 13.447,title:"ride 1"},
        {lat: 52.549, lng: 13.422,title:"ride 2"},
        {lat: 52.497, lng: 13.396,title:"ride 3"},
        {lat: 52.517, lng: 13.394,title:"ride 4"}
      ];
    setInterval(()=>{
      for(let pos of winRef.nativeWindow.ridesPositons){
        pos.lat += 0.0002;
      }
    },1000);
  }

  ngOnInit() {

  }

}

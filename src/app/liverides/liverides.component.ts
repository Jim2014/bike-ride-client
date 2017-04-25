import { Component, OnInit } from '@angular/core';
import { WindowRef } from './WindowRef';
import { LiveridesService } from '../liverides.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-liverides',
  templateUrl: './liverides.component.html',
  styleUrls: ['./liverides.component.css']
})
export class LiveridesComponent implements OnInit {
  sub: Subscription;
  constructor(private winRef: WindowRef, private liveRidesSvr: LiveridesService) {
    let self = this;
    setInterval(simuRefreshLiveRides, 1000);

    function simuRefreshLiveRides() {

      if (!self.winRef.nativeWindow.ridesPositons) {
        self.winRef.nativeWindow.ridesPositons = [
          { lat: 52.511, lng: 13.447, title: "ride 1" },
          { lat: 52.549, lng: 13.422, title: "ride 2" },
          { lat: 52.497, lng: 13.396, title: "ride 3" },
          { lat: 52.517, lng: 13.394, title: "ride 4" }
        ];
      } else {
        for (let pos of self.winRef.nativeWindow.ridesPositons) {
          pos.lat += 0.0002;
        }
      }

    }
    function refreshLiveRides() {
      self.sub = self.liveRidesSvr.getLiveRidesPosions().subscribe(
        response => {
          let positons = [];
          for (let pos of response.json())
            positons.push(pos);
          self.winRef.nativeWindow.ridesPositons = positons;
        },
        err => console.log(err)
      )
    }
  }
  ngOnInit() {

  }
  ngDestroy() {
    this.sub.unsubscribe();
  }

}

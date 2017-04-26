import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../WindowRef';
import { LiveridesService } from '../liverides.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-liverides',
  templateUrl: './liverides.component.html',
  styleUrls: ['./liverides.component.css']
})
export class LiveridesComponent implements OnInit {
  sub: Subscription;
  curPos: { lat: number, lng: number }={lat:0,lng:0};
  curUserId: String;
  constructor(private winRef: WindowRef, private liveRidesSvr: LiveridesService, private auth: AuthService) {
    let self = this;
    setInterval(simuRefreshLiveRides, 1000);

    function simuRefreshLiveRides() {

      if (!self.winRef.nativeWindow.ridesPositons) {
        self.winRef.nativeWindow.ridesPositons = [
          { lat: 41.0159, lng: -91.9992, title: "ride 1" },
          { lat: 41.0113, lng: -91.9680, title: "ride 2" },
          { lat: 41.082, lng: -91.9670, title: "ride 3" },
          { lat:41.01051, lng: -91.9005, title: "ride 4" }
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
          self.winRef.nativeWindow.ridesPositons = response.json();
        },
        err => console.log(err)
      )
    }
  }
  ngOnInit() {
    const self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        self.curPos.lat = pos.coords.latitude;
        self.curPos.lng = pos.coords.longitude;
      });
    };
    setInterval(() => {
      if (!self.curPos || !self.auth.isAuthenticated ) return;
      self.auth.getProfile((err, frofile) => {
        if(err) console.log('getProfile',err) ;
        else
          self.curUserId = frofile.sub;
      });
      if(!self.curUserId) return;
      self.curPos.lat += 0.0002;
      let data = {
        _id: self.curUserId,
        lat: self.curPos.lat,
        lng: self.curPos.lng
      };
      //console.log('user current position',data);
      self.liveRidesSvr.updateMyPos(data).subscribe(
        //response => console.log(response),
        //err => console.log(err)
      );
      self.liveRidesSvr.getLiveRidesPosions().subscribe(
        response => {
         // console.log('getLiveRidesPosions',response.json())
        }
      );

    }, 10000);
  }
  ngDestroy() {
    this.sub.unsubscribe();
  }

}

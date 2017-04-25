import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class LiveridesService {

  constructor(private http:Http) { }
  getLiveRidesPosions(){
    return this.http.get("localhost:3000/liverides");
  }
  


}

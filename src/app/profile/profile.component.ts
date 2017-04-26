import {Component, OnInit} from '@angular/core';
import {AuthService} from './../auth/auth.service';
import {ProfileService} from "../profile.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  done = false;

  constructor(public auth: AuthService, private router: Router) {
    auth.handleAuthentication();
    // auth.handleAuthenticationWithHash();
  }


  ngOnInit() {
    if (this.auth.userProfile) {

      this.profile = this.auth.userProfile;

    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }

  }

}

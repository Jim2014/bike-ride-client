import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ProfileService} from '../profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {


  constructor(public auth: AuthService, private profileServer: ProfileService, private router: Router) {
  }


  ngOnInit() {
    const self = this;
    const timer = setInterval(onsave, 500);

    function onsave() {
      if (self.auth.userProfile) {
        console.log('suth', self.auth.userProfile);
        save(self.auth.userProfile);
      } else {
        self.auth.getProfile((err, pro) => {
          // self.profileServer = profile;
          save(pro);
          console.log('pro', pro);
        });

      }
    }
    function save(data) {
      self.auth.userId = data.sub;
      self.auth.userName = data.nickname;
      self.auth.logined.emit({userId:data.sub,userName :data.nickname});
      console.log('data', data);
      self.profileServer.saveProfile(data).subscribe(
        response => console.log(response),
        err => console.log(err)
      );
      clearInterval(timer);
      self.router.navigate(['']);
      // go to homepage
    }


  }

}

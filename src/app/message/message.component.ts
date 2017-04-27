import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message.service';
import {ProfileService} from "../profile.service";
import { APP_CONFIG } from '../app.config';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  allUsers: any;
  myName = '';
  otherName = '';
  message = '';
  messageList = [];
  socket = io(APP_CONFIG.socketURL);
  constructor(private auth: AuthService, private msgSvr: MessageService,private profileService: ProfileService) {
    this.myName = auth.userName;

  }
  
  ngOnInit() {
    var self = this;
    if (self.auth.userProfile) {
      self.myName = self.auth.userProfile.nickname;
      readHisChats(self.myName);
    } else {
      self.auth.getProfile((err, profile) => {
        self.myName = profile.nickname;
        readHisChats(self.myName);
      });
    }
    
    function readHisChats(userName) {
      self.myName = userName;
      console.log('', userName);
      self.msgSvr.getChats(userName).subscribe(
        response => {
          console.log('response1', response.json());
          self.messageList = [];
          for( let m of response.json()) 
            self.messageList.unshift(m);

        },
        err => console.log(err)
      )
    }


    this.socket.on('new-message', function (data) {
      console.log('receive msg', data);
      if (data.message.to === this.myName) {
        this.messageList.unshift(data.message);
      }
    }.bind(this));

    this.profileService.getAllUsers().subscribe(
      response => {
        this.allUsers = response.json();
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('success');
      }
    );

  }

  sendMessage() {
    let curMsg = {
      from: this.myName,
      to: this.otherName,
      body: this.message,
      time:new Date()
    };
    console.log('sendMessage', curMsg);
    this.socket.emit('save-message', curMsg);
  }

}

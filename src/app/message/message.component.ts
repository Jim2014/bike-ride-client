import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  allUsers: any;

  constructor(private profileService: ProfileService) {

  }

  myName = 'user';
  otherName ='user';
  message = '';
  messageList = [];
  socket = io('http://localhost:4000');

  ngOnInit() {

    this.socket.on('new-message', function (data) {
       console.log('receive msg',data);
      if(data.message.to === this.myName) {
        this.messageList.push(data.message);
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
      from:this.myName,
      to:this.otherName,
      body:this.message
    };
    console.log('sendMessage',curMsg);
    this.socket.emit('save-message', curMsg);
  }

}

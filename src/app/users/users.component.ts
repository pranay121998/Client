import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CHAT } from '../serverURLS';
import { ChatComponent } from '../chat/chat.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private service:ServiceService) { }

  ngOnInit(): void {
  }

  joinRoom(joinChat:any){
    console.log(joinChat);
   this.service.onJoinChat(joinChat);
   this.router.navigate([`/chat`]);
  }

  

}





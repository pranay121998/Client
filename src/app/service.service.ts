import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 socket :io.Socket; 


  constructor() {
    this.socket=io.connect(); //io('http://localhost:8000')
  }

  // onConnection(){
  // this.socket.emit('connection',)
  // }
  onOutputMessage(){
   return new Observable(observer=>{
     this.socket.on('message',data=>{
       console.log("mstg ",data)
       observer.next(data);
     })
   })
  }

  onJoinChat(details:any){
    this.socket.emit('joinRoom',details);
  }

   chatMessage(msg:any){
     
     this.socket.emit('chatMessage',msg);

   }
  
   
}

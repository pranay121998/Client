// import { ElementAst } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 @ViewChild("message")
  message!: ElementRef;
@ViewChild("msgBox") msgBox!:ElementRef;

  chatBotMsg: any;
  messageArray:any[] =[] //{username:String,message:any,time:any}
  // time:any;
  constructor(private service:ServiceService) { }
  //  msgBox:any = document.getElementById('msgBox');
  ngOnInit(): void {
    this.service.onOutputMessage().subscribe((res:any)=>{
    console.log("res ",res)
    this.messageArray.push(res)   
    this.msgBox.nativeElement.scrollTop =this.msgBox.nativeElement.scrollHeight;

    })
  }


  onMsgSend(msg:any){
          console.log("msg",msg);
          console.log(this.message.nativeElement.value);
          this.service.chatMessage(msg.message);
          this.message.nativeElement.value=""
          this.message.nativeElement.focus();
          
  }
   
}

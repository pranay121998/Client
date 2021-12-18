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

  //tor starts
  import { Injectable } from "@angular/core";
  import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse,
  } from "@angular/common/http";
  import { finalize } from "rxjs/operators";
  import { LoadingService } from "./loading.service";
  // import { AppLoaderComponent } from '../loader/Loader-full';
  import { of } from "rxjs";
  
  @Injectable()
  export class LoadingInterceptor implements HttpInterceptor {
    private totalRequests = 0;
    debugger;
    constructor(private loadingService: LoadingService) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler) {
      if (request && request.body && request.body.stopLoader) {
      } else {
        this.totalRequests++;
        this.loadingService.setLoading(true);
      }
  
      return next.handle(request).pipe(
        finalize(() => {
          if (request && request.body && request.body.stopLoader) {
          } else {
            this.totalRequests--;
            if (this.totalRequests === 0) {
              this.loadingService.setLoading(false);
            }
          }
        })
      );
    }
  }
  
  //tor ends



//serve starts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable()
export class LoadingService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading$$.asObservable();

  setLoading(isLoading: boolean) {
    this.isLoading$$.next(isLoading);
  }
}

//serve ends


//loader starts
import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-full-loader',
    template: `
<div *ngIf="display">
        <div class="HBLoader" >
            <img src="../../../assets/img/NEWHB.gif" />
        </div>
        </div>
`,
    styleUrls: ['./loader.css']
})
export class LoaderComponent {
    @Input() display: boolean;

}



//loader ends

}





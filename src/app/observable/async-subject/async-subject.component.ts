import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncEmit:any;

  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {
   this.design.asyncVideoEmit.subscribe(res=>{
    this.asyncEmit=res;
    console.log(res);
    
   })
  }

  onVideoAdd(video: any) {
    this.design.asyncVideoEmit.next(video);
    console.log(video);
    
  }

  onComplete(){
    this.design.asyncVideoEmit.complete();
  }

}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg:any;
  videoSubscription!: Subscription;
  timerBroadCastSubscription!:Subscription
  constructor(private design: DesignUtilityService ) { }

  ngOnInit(): void {

    const broadCastVideos = interval(1000);
    const timerBroadCast= timer(5000,1000)

    this.videoSubscription = broadCastVideos.subscribe(res=>{
      console.log(res);
      this.obsMsg='Video '+ res;
      this.design.print(this.obsMsg,'elContainer')
      this.design.print(this.obsMsg,'elContainer2')
     
      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    })


    this.timerBroadCastSubscription = timerBroadCast.subscribe(res=>{
      console.log(res);
      this.obsMsg='Video '+ res;
      this.design.print(this.obsMsg,'elContainer3')
      if(res >= 5){
        this.timerBroadCastSubscription.unsubscribe();
      }
    })
  }

}

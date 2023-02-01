import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  userList1: any = ['Angular1', 'Angular2',];
  userList2: any = [];
  userList3: any = [];

  subscription2!: Subscription
  subscription3!: Subscription

  subcribeMode2: boolean = false
  subcribeMode3: boolean = false;

  methodInterval: boolean = false;
  intervalSubscription!: Subscription;

  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {
    this.design.videoEmit.subscribe(res => {
      this.userList1.push(res);
    })
  }

  onVideoAdd(video: any) {
    this.design.videoEmit.next(video);
  }

  user2Subscribe() {
    if (this.subcribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.design.videoEmit.subscribe((res: any) => {
        this.userList2.push(res)
      })
    }
    this.subcribeMode2 = !this.subcribeMode2;
  }

  user3Subscribe() {
    if (this.subcribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.design.videoEmit.subscribe((res: any) => {
        this.userList3.push(res)
      })
    }
    this.subcribeMode3 = !this.subcribeMode3;
  }


  toggle() {

    const broadcastVideo = interval(1000);

    if (!this.methodInterval) {
      this.intervalSubscription = broadcastVideo.subscribe(res => {
        this.design.videoEmit.next("Video" + res);
      })
    }
    else {
      this.intervalSubscription?.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;
  }

}

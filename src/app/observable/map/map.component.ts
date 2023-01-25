import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  sub1!: Subscription;
  sub2!: Subscription;
  msg1:any;
  msg2:any;

  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {
    this.example1();
    this.example2();
    this.example3();
  }

  example1(){
    const broadCastvideo= interval(1000);
    this.sub1=broadCastvideo.pipe(
      map(data => 'Video'+data
      )
    )
    .subscribe((res:any)=>{
      this.msg1=res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 8000);

  }

  example2(){
  const broadCastvideo= interval(1000);
  this.sub2=broadCastvideo.pipe(
    map(data => data *10
    )
  )
  .subscribe((res:any)=>{
    this.msg2=res;
  })

  setTimeout(() => {
    this.sub2.unsubscribe();
  }, 9000);
  }


  example3(){
    const member=[
      {id:1, name:'zash'},
      {id:2, name:'John'},
      {id:3, name:'Tye'},
      {id:4, name:'Brook'},
      {id:5, name:'Hayden'},
    ]

    let memObs= from(member);
    memObs.pipe(
      map(data=>data.name)
    )
    .subscribe((res:any)=>{
      this.design.print(res,'elContainer3') 
    })

  }
 
}

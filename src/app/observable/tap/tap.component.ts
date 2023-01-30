import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  arr=["dcds","fdsfds","fsdfdsevfg","rewrtf","uytutu"];
  
  mycolor:string='';
  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {

    let obsSubs!:Subscription
    let obsSubs1!:Subscription
    const source= interval(1500);

    

    // obsSubs=source.pipe(
    //   tap(res=>{
    //     if(res==3){
    //       obsSubs.unsubscribe();
    //     }
    //   }
    //   ),
    //   map(data=>this.arr[data])
    // ).subscribe(res=>{
    //   this.design.print(res,'elcontainer') 
    // });

    const Colors=['Red','Blue','Green','Pink','Orange'];

    obsSubs1=source.pipe(
      tap(res=>{
        // this.mycolor=Colors[res];
        console.log('tap=>' +res);
        if(res==3){
         obsSubs1.unsubscribe();
        }
      }),
      
      map(res=>Colors[res])
    ).subscribe(res=>{ 
      console.log(res);
      this.mycolor=res;
      this.design.print(res,'elcontainer1') 
    });


  }



}

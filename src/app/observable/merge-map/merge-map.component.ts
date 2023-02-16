import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News']);


    //EX-01 | Map:

    source.pipe(
      map(res=> this.getdata(res))
    )
    .subscribe((res:any)=>{
      this.design.print(res, 'containerMap')
    })
    // .subscribe(res=>res.subscribe(res2=>{  //Subscribed 2 times
    //   this.design.print(res2, 'containerMap')
    // }))

    
    //Ex -02 | map+mergeAll:

    source.pipe(
      map(res=> this.getdata(res)),
      mergeAll()
    )
    .subscribe((res:any)=>{
      this.design.print(res, 'containerMapMergeAll')
    })

    //EX-03 | MergeMap:

    source.pipe(
     mergeMap(res=> this.getdata(res))
    )
    .subscribe((res:any)=>{
      this.design.print(res, 'containermergeMap')
    })

  }



    getdata(data:any){  //Getting data and return as observable
      return of(data + ' Video Uploaded')
    }

}

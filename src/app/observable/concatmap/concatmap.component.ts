import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {

    const source= from(['Tech','Comedy','News']);

    //EX-01:

    source.pipe(
      map(res=> this.getdata(res))
    )
    .subscribe((res:any)=>{
      this.design.print(res, 'containerMap')
    });

    //EX-02:

    source.pipe(
      mergeMap(res=> this.getdata(res)), //Will take delay at the time of initialisation only.
    )
    .subscribe((res:any)=>{
      this.design.print(res, 'containerMapConcatAll')
    });

    //EX-03:

    source.pipe(
      concatMap(res=> this.getdata(res)), //Will take delay every time.
    )
    .subscribe((res:any)=>{
      this.design.print(res, 'containerConcatMap')
    });

  }


  getdata(data:any){  //Getting data and return as observable
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }


}

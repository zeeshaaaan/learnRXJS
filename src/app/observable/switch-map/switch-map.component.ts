import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News']);


    //EX-01 | Map:

    source.pipe(
      map(data=>this.getdata(data))
    ).subscribe((res:any)=>{
      console.log(res);
      this.design.print(res,'containerMap')
    })
  
    
    //Ex -02 | map+switchAll:

    source.pipe(
      map(data=>this.getdata(data)),
      switchAll()
    ).subscribe((res:any)=>{
      console.log(res);
      this.design.print(res,'containerMapSwitchAll')
    })

    //EX-03 | SwitchMap:

    source.pipe(
      switchMap(data=>this.getdata(data)),
    ).subscribe((res:any)=>{
      console.log(res);
      this.design.print(res,'containerSwitchMap')
    })

    
  }

  getdata(data:any){  //Getting data and return as observable
    return of(data + ' Video Uploaded').pipe(delay(1000))
  }

}

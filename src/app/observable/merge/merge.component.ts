import { Component, OnInit } from '@angular/core';
import { interval, map, take, concat, merge } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {

    const sourceTech = interval(1500).pipe(map(res=> 'Tech Video#' + (res+1)),take(5));
    const sourceComedy = interval(2000).pipe(map(res=> 'Comedy Video#' + (res+1)),take(3))
    const sourceNews = interval(3000).pipe(map(res=> 'News Video#' + (res+1)),take(4))

    const finalObs = merge(sourceTech,sourceComedy,sourceNews);

    finalObs.subscribe(res=>{
      this.design.print(res,'container1')
      console.log(res);
    })
  }


}

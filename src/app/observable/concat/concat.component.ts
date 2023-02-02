import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {

    const sourceTech = interval(1000).pipe(map(res=> 'Tech Video#' + (res+1)),take(5));
    const sourceComedy = interval(1000).pipe(map(res=> 'Comedy Video#' + (res+1)),take(3))
    const sourceNews = interval(1000).pipe(map(res=> 'News Video#' + (res+1)),take(4))

    const finalObs = concat(sourceTech,sourceComedy,sourceNews);

    finalObs.subscribe(res=>{
      this.design.print(res,'container1')
      console.log(res);
      
    })
  }

}

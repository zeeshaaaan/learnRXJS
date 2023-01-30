import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  names=['Zash','John', 'Raj', 'Brook','Curran','Jofra'];
  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {

    let cond1=fromEvent(document,'click');
    
    let nameSource=from(this.names);

    nameSource.pipe(
      take(4)
    ).subscribe(res=>{
      this.design.print(res,'container1')
    });

    nameSource.pipe(
      takeLast(2)
    ).subscribe(res=>{
      this.design.print(res,'container2')
    });


    const source=interval(1000);
    source.pipe(
      takeUntil(cond1)
    ).subscribe((res:any)=>{
      this.design.print(res,'container3')
    });

  }

}

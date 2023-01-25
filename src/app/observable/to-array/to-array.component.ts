import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  sourceSub!: Subscription;
  users=[
    {name:'Zeeshan', skill:'Angular'},
    {name:'Rizwan', skill:'React'},
    {name:'Rahul', skill:'Vue'},
  ]
  constructor() { }

  ngOnInit(): void {

    //Ex-01
    const source = interval(1000)
    this.sourceSub=source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res=>{
      // console.log(res);
    });

    //EX-02

    const source2= from(this.users);
    source2.pipe(
      toArray()
    ).subscribe(res=>{
      console.log(res);
    });

    //EX-03
    
    const source3=of('Zash','Ali','Mahesh');
    source3.pipe(
      toArray()
    ).subscribe(res=>{
      console.log(res);
    });
  }

 

}

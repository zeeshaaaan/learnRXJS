import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  data:any;
  data1:any;
  data2:any;
  dataArr=[
    {id:1,name:'zash',gender:'Male'},
    {id:2,name:'Neha',gender:'Female'},
    {id:3,name:'Anup',gender:'Male'},
    {id:4,name:'Sakhsi',gender:'Female'},
    {id:5,name:'Pradeep',gender:'Male'},
  ]
  constructor() { }

  ngOnInit(): void {

    const source =from(this.dataArr);

    source.pipe(
      filter(data=>data.name.length ==4),
      toArray()
    ).subscribe(res=>{
      this.data=res;  
      console.log(res);
    });

    source.pipe(
      filter(data=>data.gender =='Female'),
      toArray()
    ).subscribe(res=>{
      this.data1=res;  
      console.log(res);
    });

    source.pipe(
      filter(data=>data.id <=3),
      toArray()
    ).subscribe(res=>{
      this.data2=res;  
      console.log(res);
    });


  }


  
}

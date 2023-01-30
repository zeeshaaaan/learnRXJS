import { Component, OnInit } from '@angular/core';
import { from, map, pluck, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  sub1!: Subscription;
  sub2!: Subscription;
  msg1:any;
  msg2:any;
  data:any;
  data1:any;
  data2:any;
  constructor() { }

  users=[
    {name:"Zeeshan",skill:"Angular",
      job:{
        title:' Frontend Developer',
        exp:'3 years'
      }
    },
    {name:"Sakib",skill:"Java",
    job:{
      title:'Tester',
      exp:'3 years'
    }
  },
    {name:"Adith",skill:"Springboot",
    job:{
      title:' Backend Developer',
      exp:'3 years'
    }
  },
    {name:"Surekha",skill:".Net",
    job:{
      title:' API Developer',
      exp:'3 years'
    }
  },
  ];

  ngOnInit(): void {

    from(this.users).pipe(
      // map(data=>data.name),
      pluck('name'),
      toArray()
    ).subscribe((res)=>{
      this.data=res;
      console.log(res);
      
    });


    from(this.users).pipe(
      // map(data=>data.name),
      pluck('job','title'),
      toArray()
    ).subscribe((res)=>{
      this.data1=res;
      console.log(res);
      
    });


  }

}

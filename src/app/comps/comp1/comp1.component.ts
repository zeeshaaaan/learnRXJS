import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  userName!:string;
  constructor(private design:DesignUtilityService) { 
    this.design.userName.subscribe(res=>{
      this.userName=res;
    })
  }

  ngOnInit(): void {
  }

  onChange(uname:any){
    console.log(uname.value);
    this.design.userName.next(uname.value);
  }

}

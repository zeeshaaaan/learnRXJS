import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
    exclusive:boolean=true;
    userName!:string;
  constructor(private design:DesignUtilityService) { 
    this.design.userName.subscribe(res=>{
      this.userName=res;
    })
  }

  ngOnInit(): void {
    this.design.exclusive.next(true);
  }

  ngOnDestroy(){
    this.design.exclusive.next(false);
  }

}

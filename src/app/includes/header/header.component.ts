import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive:boolean=false;
  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {
    this.design.exclusive.subscribe(res=>{
      this.exclusive=res;
    })
  }

}

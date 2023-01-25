import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg:any;
  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {
    this.ofOperator();
    this.fromOperator();
    
  }


  ofOperator(){
    const obs1= of('Zash','John', 'Raj');
    obs1.subscribe((res)=>{
      this.design.print(res,'elContainer1')
      
    });

    const obs2= of({a:'Zash',b:'John',c: 'Raj'});
    obs2.subscribe((res)=>{
      this.obsMsg=res;
    })
  }


  
  fromOperator(){
    //From Array
    const obs3=from(['Cross','Band','Panel']);
    obs3.subscribe((res)=>{
      this.design.print(res,'elContainer3')
    });

    //From Promise
    const promise= new Promise(resolve=>{
      setTimeout(() => {
        resolve('Promise resolved')
      }, 3000);
    });

    const obs4=from(promise);
    obs4.subscribe((res:any)=>{
      this.design.print(res,'elContainer4')
    });

    //From String
    const obs5=from('Zeeshan');
    obs5.subscribe((res:any)=>{
      this.design.print(res,'elContainer5')
    });
  }
}



import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  status!:string;
  status2!:string;
  nameStatus!:string;
  sub2!: Subscription
  arrCourse=['Angular','Javascript','TypeScript','Vue','React'];
  nameList=['Zash','John', 'Raj', 'Brook'];
  name!:string;
  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex-01:
    this.manual();
    //Ex-02:
    this.custom();
  
    //Ex-03:

    const cusObs3= Observable.create((observer:any)=>{
      let count =0
      setInterval(()=>{
       observer.next(this.nameList[count]);

       if(count >= 2 ){
        observer.error()
       }

       if(count >=3 ){
        observer.complete()
       }
       count++;
      },1000)
    })

   this.sub2= cusObs3.subscribe((res:any)=>{
      console.log(res);
      this.name=res
    },
    (err:any)=>{
      this.nameStatus='error';
    },
    ()=>{
      this.nameStatus='completed';
    })
    
  }


  manual(){
    const cusObs1 = Observable.create((observer:any)=>{

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('React');
      }, 2000);

      setTimeout(() => {
        observer.next('Vue');
       
      }, 3000);

      setTimeout(() => {
        observer.next('NextJS');
        // observer.error();
      }, 4000);

      setTimeout(() => {
        observer.next('KnouckoutJS');
         observer.complete();
      }, 5000);
    });

    cusObs1.subscribe((res:any)=>{
      console.log(res);
      this.design.print(res,'elContainer')
    },
    (err:any)=>{
      this.status='error';
    },
    ()=>{
      this.status='completed';
    }
    )
  }

  custom(){
    const cusObs2= Observable.create((observer:any)=>{
      let count =0
      setInterval(()=>{
       observer.next(this.arrCourse[count]);

       if(count >= 3 ){
        observer.error()
       }

       if(count >= 4 ){
        observer.complete()
       }
       count++;
      },1000)
    })

   this.sub2= cusObs2.subscribe((res:any)=>{
      console.log(res);
      this.design.print(res,'elContainer2')
    },
    (err:any)=>{
      this.status2='error';
    },
    ()=>{
      this.status2='completed';
    })

  }

  ngOnDestroy(){
      this.sub2.unsubscribe();
  }
}





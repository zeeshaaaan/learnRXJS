import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-concatmap2',
  templateUrl: './concatmap2.component.html',
  styleUrls: ['./concatmap2.component.scss']
})
export class Concatmap2Component implements OnInit {

  path:any='../../assets/facebook.png';
  path2:any='../../assets/party.png';


  notifyData=[
    {
      name:'facebook',
      icon:'assets/facebook.png',
      time:'4 second ago',
      img:'assets/party.png',
      strong:'Zeeshan Ali',
      p:"This is Notification-1"
    },
    {
      name:'google',
      icon:'assets/google.png',
      time:'2 second ago',
      img:'assets/shop.png',
      strong:'Mahesh',
      p:"This is Notification-2"
    },
    {
      name:'twitter',
      icon:'assets/twitter.png',
      time:'3 second ago',
      img:'assets/programmer.png',
      strong:'Zash Ali',
      p:"This is Notification-3"
    },
    
  ]

  constructor(private design : DesignUtilityService) { }

  ngOnInit()  {


    from(this.notifyData).pipe(
      concatMap(res=>this.getHtml(res))
      // mergeMap(res=>this.getHtml(res))
    ).subscribe((res:any)=>{
      console.log(res);
      this.design.print2(res, 'elContainer')
      
    });

//     let data=`<div class="header">
//     <div class="app">
//         <img src="assets/facebook.png" alt="" width="20px" height="20px"> Facebook
//     </div>
//     <div class="time">4 second ago</div>
// </div>
// <div class="body  border-bottom">
//     <img src="assets/party.png" alt="" class="item-img" width="20px" height="20px">
//     <strong>Zeeshan</strong>
//     <p>this is notification Text</p>
// </div>`

    
    // this.design.print2(data, 'elContainer')
    // this.design.print2(data, 'elContainer')
    // this.design.print2(data, 'elContainer')
   

  }


  getHtml(data:any):any{
   return of(`<div class="header">
    <div class="app">
        <img src="${data.icon}" alt="" width="20px" height="20px"> ${data.name}
        
    </div>
    <div class="time">${data.time}</div>
  </div>
<div class="body border-bottom">
    <div style="display: flex; justify-content: space-between;">
    <strong>${data.strong}</strong>
    <img src="${data.img}" alt="" width="30px" height="30px">
    </div>
    <p>"${data.p}" Text</p>
</div>`).pipe(delay(2000))
  }

}

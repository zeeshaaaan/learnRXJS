import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';


@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person:any;
  fetching:boolean=false;
  status:string='No data'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }

  fetchDetails(){
    this.status='Fetching data...'
    this.fetching=true;
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(3)
      retryWhen(err=>err.pipe(
        delay(2000),
        scan((retrycount:any)=>{
          if(retrycount >=3){
            throw err
          }
          else{
            retrycount=retrycount +1;
            console.log("retrycount=>" + retrycount);
            this.status = 'Retrying Attempt #'+retrycount;
            return retrycount;            
          }
         
        },0)
      ))
    ).subscribe((res:any)=>{
    console.log(res[0]);
    this.person=res[0]
    this.fetching=false;
    this.status='Data Fetched'
    },
    (err)=>{
      console.log(err);
      this.fetching=false;
      this.status='Problem in fetching Data'
    }
    )
  }



}

import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>(); //Not take any initial value

  userName = new BehaviorSubject<string>('Zash'); //take any initial value

  videoEmit = new ReplaySubject<any>(3,5000); //Take number of previous-items , time --optional

  asyncVideoEmit = new AsyncSubject(); // on subscription completed..will show last emitted value.

  constructor() { }

  print(val:string, containerId:any){
    let el = document.createElement('li');
    el.innerText=val;
    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val:string, containerId:any){
    let el = document.createElement('div');
    el.setAttribute('class','item')
    el.innerHTML=val;
    document.getElementById(containerId)?.prepend(el);
  }
}

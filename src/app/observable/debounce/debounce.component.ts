import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit,AfterViewInit {
  redata=null;
  redata2=null;
  @ViewChild('myInput') myInput !: ElementRef;
  @ViewChild('myInput2') myInput2 !: ElementRef

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    const searchTerm= fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
      map(event=>event.target.value),
      debounceTime(500)
    )
    searchTerm.subscribe(res=>{
      console.log(res);
      this.redata=res;

      setTimeout(() => {
        this.redata=null;
      }, 1000);
      
    });

  //EX-02:

  const searchTerm2= fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
    map(event=>event.target.value),
    debounceTime(500),
    distinctUntilChanged()
  )
  searchTerm2.subscribe(res=>{
    console.log(res);
    this.redata2=res;

    setTimeout(() => {
      this.redata2=null;
    }, 1000);
    
  })


  }

}

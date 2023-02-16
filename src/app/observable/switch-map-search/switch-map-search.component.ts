import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/appInterface/search.interface';
import { SearchService } from 'src/app/appService/search.service';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements OnInit,AfterViewInit{
  path:any='../../assets/facebook.png';
  path2:any='../../assets/party.png';

  @ViewChild('searchForm') searchForm!: NgForm
  searchResult: any
  resultCount!:number

  constructor(private searchservice:SearchService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
   const formValue= this.searchForm?.valueChanges;
   formValue?.pipe(
    // map(data=>data['searchTerm'])
    // filter(()=>this.searchForm.valid),
    pluck('searchTerm'),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(data=>this.searchservice.getSearch(data))
   ).subscribe(res=>{
    console.log(res);
    this.searchResult=res
    this.resultCount=this.searchResult.length;
   })
  }

}

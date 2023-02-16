import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url="https://my-json-server.typicode.com/Uxtrendz/apis/VideoList"

  constructor(private http:HttpClient) { }

  getSearch(searchTerm:string):Observable<Search>{
    return this.http.get<Search>(this.url+'?q='+searchTerm)
  }
}

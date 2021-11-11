import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchapiService {

  constructor(private http: HttpClient) { }

  search(category:any){
    return this.http.get(`https://swapi.dev/api/${category}`)
  }
}

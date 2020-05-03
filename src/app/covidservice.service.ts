import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CovidserviceService {

  constructor(private http:HttpClient) { }

  getIndiaStats(){
    return this.http.get("https://api.covid19api.com/live/country/India/status/confirmed")
  }

}
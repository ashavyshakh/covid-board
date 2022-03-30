import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {
  
  constructor(public httpClient:HttpClient) { 
    
  }
  getCovidData() : any {
  // const headers= new HttpHeaders()
  // .set('X-RapidAPI-Host', 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com')
  // .set('X-RapidAPI-Key', 'be13119dddmsh1a1c7704ae7f436p1ffabfjsn7782f1c4dc5f' );
    return this.httpClient.get(`assets/mock-json/world-covid-data.json`);
  }
  getCountryCovidData() : any {
  // const headers= new HttpHeaders()
  // .set('X-RapidAPI-Host', 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com')
  // .set('X-RapidAPI-Key', 'be13119dddmsh1a1c7704ae7f436p1ffabfjsn7782f1c4dc5f' );
    return this.httpClient.get(`assets/mock-json/country-covid-data.json`);
  }
}

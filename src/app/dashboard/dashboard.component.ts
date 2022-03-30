import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../services/covid-service.service';
import { sharedServiceService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  covidListTotal:any;
  covidListToday:any;

  constructor(public covidServiceService : CovidServiceService,) { }

  ngOnInit(): void {
    this.getCovidData();
  }
  getCovidData(){
    this.covidServiceService.getCovidData().subscribe((elem: { result: any; }) => {
      this.covidListTotal = elem.result.filter(function(el:any){
        return el.type == 'total'
      })
      this.covidListToday = elem.result.filter(function(el:any){
        return el.type == 'today'
      })
    
  });
  }
}
 
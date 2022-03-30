import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../services/covid-service.service';
import { Router } from '@angular/router';
import { sharedServiceService } from '../services/shared.service';


@Component({
  selector: 'app-country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.scss']
})
export class CountryListingComponent implements OnInit {
  covidListTotal: any;

  constructor(public covidServiceService : CovidServiceService,
    private route: Router,
    private sharedserviceService: sharedServiceService) { }

  ngOnInit(): void {
    this.getCountryCovidData();
  }
  getCountryCovidData() : any{
    this.covidServiceService.getCountryCovidData().subscribe((elem: { result: any; }) => {
      this.covidListTotal = elem.result;
    
  });
  }
  edit (item:any): any{
    this.sharedserviceService.setCurrentItem(item);
    this.route.navigate(['/edit']);
  }

}

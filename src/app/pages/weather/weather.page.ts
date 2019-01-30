import { Component, OnInit } from '@angular/core';
import { WeatherService, SearchType } from '../../services/weather-api.service';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

//import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor( 
    private weatherService:WeatherService,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.weatherService.searchData(this.searchTerm, this.type);
    //console.log("My result: ", this.results)
    //this.results.subscribe(res => {

    //})
  }

}

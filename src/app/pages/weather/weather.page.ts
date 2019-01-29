import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-api.service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weather:any;
  location: {
    city:string,
    country:string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherService:WeatherService) {

   }

  ngOnInit() {
    this.location = {
      city: 'Atlanta',
      country: 'US'
    }
    this.weatherService.getWeather(this.location.city, this.location.country).subscribe(this.weather => {
      console.log(this.weather);
    })
  }

}

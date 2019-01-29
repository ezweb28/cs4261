import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '836cd1a48aafe618b26f7f08c777df54';
  url;

  constructor(public http: HttpClient) {
    this.url.get = 'https://api.openweathermap.org/data/2.5/weather?q=';/*{cityname},{countrycode}&appid=apikey;*/
   }

   getWeather(city, country){
     return this.http.get(this.url+city+','+country+'&appid='+this.apiKey)
     .map(res => res.json());
   }
}

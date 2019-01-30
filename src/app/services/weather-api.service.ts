import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators'

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey = '93936136';
  apiURL = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {
    console.log('Are you looking for movies?');
    //this.apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=836cd1a48aafe618b26f7f08c777df54';
  }

  
  searchData(title: string, SearchType: string): Observable<any>{
     return this.http.get(`${this.apiURL}?s=${encodeURI(title)}&type=${SearchType}&apikey=${this.apiKey}`)
     .pipe(
       map(results => {
         console.log('RAW', results);
         return results['Search'];
       })
     );
    }

    getDetails(id) {
      return this.http.get(`${this.apiURL}?i=${id}&plot=full&apikey=${this.apiKey}`);
    }




}

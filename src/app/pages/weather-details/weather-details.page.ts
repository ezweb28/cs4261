import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.weatherService.getDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    })
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}

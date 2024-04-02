import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.scss',
})
export class WeatherListComponent {
SortWeather(property:string) {
  this.filterWeatherList.sort(function (a, b) {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  })
}
  weatherList: any[] = [
    { city: 'Delhi', temp: 30 },
    { city: 'Mumbai', temp: 35 },
    { city: 'Chennai', temp: 25 },
  ];
  searchText: string = '';
  filterWeatherList: any[];

  constructor(private router: Router) {
    this.filterWeatherList = this.weatherList;
  }

  getWeatherDetails(temp: any) {
    this.router.navigate(['/weather'], { queryParams: { temp } });
  }

  filterWeather() {
    if (!this.searchText) {
      this.filterWeatherList = this.weatherList;
    } else {
      this.filterWeatherList = this.weatherList.filter((weatherCity) => {
        return weatherCity.city
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    }
    console.log(this.filterWeatherList);
  }
}

import { Routes } from '@angular/router';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';
import { WeatherDetailsComponent } from './Components/weather-details/weather-details.component';

export const routes: Routes = [
  {path: '', redirectTo: '/weather', pathMatch: 'full'},
  {path: 'weather-list',component: WeatherListComponent, title: 'Weather List'},
  {path: 'weather',component: WeatherDetailsComponent, title: 'Weather Details'},
];

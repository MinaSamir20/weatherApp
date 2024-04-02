import { Component, OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../Directives/background-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TempertureConversionPipe } from "../../Pipes/temperture-conversion.pipe";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-weather-details',
    standalone: true,
    templateUrl: './weather-details.component.html',
    styleUrl: './weather-details.component.scss',
    imports: [BackgroundColorDirective, TempertureConversionPipe, CommonModule]
})
export class WeatherDetailsComponent implements OnInit{
temperture: number = 0;
unite: string = 'C';

constructor(private route : ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const temp = params['temp'];
      if(temp) {
        this.temperture = +temp;
      }
    })
  }
  toggleUnit(){
    this.unite = this.unite === 'C' ? 'F' : 'C';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempertureConversion',
  standalone: true
})
export class TempertureConversionPipe implements PipeTransform {

  transform(value: number, unit:string): number | null {
    if(value && !isNaN(value)){
      if(unit === 'F'){
        return (value - 32) * 5/9;
      }
      if(unit === 'C'){
        return (value * 9/5) + 32;
      }
    }
    return null;
  }

}

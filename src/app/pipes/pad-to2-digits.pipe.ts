import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padTo2Digits'
})
export class PadTo2DigitsPipe implements PipeTransform {

  transform(value: any): string {
    return `${String(value).padStart(2, '0')}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/hero';

@Pipe({
  name: 'isPassedPure'
})
export class IsPassedPurePipe implements PipeTransform {

  transform(value: Student[]): any {

    console.log('Pure Pipe');
    value.forEach(s => {
      console.log(s);
    });
    console.log('--------------------------------------------------------');

    return value.filter(student => student.isPassed);
  }

}

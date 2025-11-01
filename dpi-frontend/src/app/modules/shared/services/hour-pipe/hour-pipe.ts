import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'hour'})
export class HourPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const slots = value.split(':');
    return slots[0] + ':' + slots[1];
  }

}

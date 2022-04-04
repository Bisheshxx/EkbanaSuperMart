import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seachpippe'
})
export class SeachpippePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

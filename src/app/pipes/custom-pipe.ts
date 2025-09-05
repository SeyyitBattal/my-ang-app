import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  // İlk yüklendiğinde transform bu şekilde:
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string, a:number, b:number):string {
      return value.slice(a,b);
  }

}

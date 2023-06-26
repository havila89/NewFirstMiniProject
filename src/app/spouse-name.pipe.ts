import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spouseName',
})
export class SpouseNamePipe implements PipeTransform {
  transform(status: any, spousename: any): any {
    if (status == 'Yes') {
      return status + '   Spouse Name:' + spousename;
    } else return status;
  }
}

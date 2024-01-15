import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onepagePipeline',
  standalone: true
})
export class OnepagePipelinePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

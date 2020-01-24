import { Pipe, PipeTransform } from '@angular/core';

import { ListaModule } from '../models/lista/lista.module'

@Pipe({
  name: 'filterIsComplete',
  pure: false
})
export class FilterIsCompletePipe implements PipeTransform {

  transform(list: ListaModule[], isComplete: boolean=true): ListaModule[] {
    	return list.filter(list => list.isComplete === isComplete);
  }

}

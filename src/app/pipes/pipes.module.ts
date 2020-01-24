import { NgModule } from '@angular/core';
import { FilterIsCompletePipe } from './filter-is-complete.pipe';

@NgModule({
	declarations: [FilterIsCompletePipe],
	exports: [FilterIsCompletePipe]
})
export class PipesModule { }

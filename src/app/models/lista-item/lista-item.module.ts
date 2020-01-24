import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ListaItemModule { 
	description: string
	isComplete:      boolean

	constructor(description: string){
		this.description = description;
		this.isComplete    = false;
	}
}

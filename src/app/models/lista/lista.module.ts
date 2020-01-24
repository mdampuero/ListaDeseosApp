import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemModule } from '../lista-item/lista-item.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ListaModule { 

	id:         number;
	title:      string;
	createdAt:  Date;
	finishedAt: Date;
	isComplete: boolean;
	items:      ListaItemModule[];

	constructor(title:string){
		this.title      = title;
		this.createdAt  = new Date();
		this.isComplete = false;
		this.items      = [];
		this.id         = new Date().getTime();
	}
}

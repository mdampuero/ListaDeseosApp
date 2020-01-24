import { Injectable } from '@angular/core';
import { ListaModule } from '../models/lista/lista.module'

@Injectable({
	providedIn: 'root'
})
export class DeseosService {

	list:ListaModule[]=[];

	constructor() { 
		console.log("Servicio inicializado");
		this.loadStorage();
	}

	add(title:string){
		const newList = new ListaModule(title); 
		this.list.push(newList);
		this.saveStorage();
		return newList.id;
	}

	get(id : number | string){
		id = Number(id);
		return this.list.find(listData=>listData.id===id)
	}

	saveStorage(){
		localStorage.setItem('data',JSON.stringify(this.list));
	}

	loadStorage(){
		if(JSON.parse(localStorage.getItem('data'))){
			this.list = JSON.parse(localStorage.getItem('data'));
		}
	}

	deleteList(list){
		this.list= this.list.filter(listData=>listData.id!==list.id);
		this.saveStorage();
	}
}

import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

import { ActivatedRoute } from '@angular/router';
import { ListaModule } from '../../models/lista/lista.module';
import { ListaItemModule } from '../../models/lista-item/lista-item.module';
@Component({
	selector: 'app-add',
	templateUrl: './add.page.html',
	styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

	list : ListaModule;
	titleItem = '';

	constructor(
		public deseosService:DeseosService,
		private activatedRoute : ActivatedRoute
		) { 

		const listId= this.activatedRoute.snapshot.paramMap.get('listId');
		console.log(listId);
		this.list = deseosService.get(listId);
		console.log(this.list);
	}

	ngOnInit() {
	}

	addItem(){
		if(this.titleItem.length === 0) return;
		const newItem = new ListaItemModule(this.titleItem);
		this.list.items.push(newItem);
		this.titleItem='';
		this.deseosService.saveStorage();
	}

	changeItem(item : ListaItemModule){
		const pending = this.list.items.filter(itemData => ! itemData.isComplete).length;
		if(pending === 0){
			this.list.finishedAt = new Date();
			this.list.isComplete = true;
		}else{
			this.list.finishedAt = null;
			this.list.isComplete = false;
		}
		this.deseosService.saveStorage();
	}

	delete(i:number){
		this.list.items.splice(i,1);
		this.deseosService.saveStorage();
	}

}

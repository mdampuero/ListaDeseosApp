import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController,IonList } from '@ionic/angular';

@Component({
	selector: 'app-listas',
	templateUrl: './listas.component.html',
	styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

	@Input() isComplete = true;
	@ViewChild( IonList, { static:false } ) ionList : IonList;

	constructor(
		public deseosService:DeseosService,
		private router: Router,
		public alertController: AlertController
		) { }

	goToList(list){
		if(this.isComplete)
			this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
		else
			this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);

	}

	delete(list){
		this.deseosService.deleteList(list);
	}

	async edit(item){  
		const alert = await this.alertController.create({
			header: 'Editar lista',
			// subHeader: 'Subtitle',
			inputs:[
			{
				name:'title',
				type: 'text',
				value: item.title,
				placeholder:'Título de la lista'
			}
			],
			buttons:[
			{
				text: 'Cancelar',
				role: 'cancel',
				handler:()=>{
					this.ionList.closeSlidingItems();
				}
			},
			{
				text: 'Aceptar',
				handler:(data)=>{
					if(data.title.lenght ===0)
						return;
					item.title=data.title;
					this.deseosService.saveStorage();
					this.ionList.closeSlidingItems();
				}
			}
			]
		});
		alert.present();
	}
}

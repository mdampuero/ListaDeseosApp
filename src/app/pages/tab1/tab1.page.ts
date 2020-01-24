import { Component } from '@angular/core';

import { DeseosService } from '../../services/deseos.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( 
    public deseosService:DeseosService,
    public alertController: AlertController,
    private router: Router
    ) {

  }

  
  async add(){  
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      // subHeader: 'Subtitle',
      inputs:[
      {
        name:'title',
        type: 'text',
        placeholder:'Título de la lista'
      }
      ],
      buttons:[
      {
        text: 'Cancelar',
        role: 'cancel',
        handler:()=>{
          console.log('Cancelar');
        }
      },
      {
        text: 'Aceptar',
        handler:(data)=>{
          if(data.title.lenght ===0)
            return;
          const listId= this.deseosService.add(data.title);
          this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
        }
      }
      ]
    });
    alert.present();
  }

}

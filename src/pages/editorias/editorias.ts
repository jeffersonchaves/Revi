import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-editorias',
  templateUrl: 'editorias.html',
})
export class EditoriasPage {

  private url: string = "http://www.ielusc.br/aplicativos/wordpress_revi/wp-json/app/v1/categories";

  public checkedItens : Array <any>;
  public categories : Array <any> = [];
  public local_storage: Storage;
  
  constructor(public storage: Storage, public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.local_storage = storage;
    this.fetchContent();

    this.local_storage.set('setconsssss', "noconstrutor");

    this.storeCategories();
  }

  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Buscando categorias...'
    });

    loading.present();

    this.http.get(this.url).map(res => res.json()).subscribe(data => {
        this.categories = data.data;
        loading.dismiss();
    });
  }

  alerta(term_id):void {
     
    let dataCategory = [
      {
      "nome" : term_id,
      "term_id" : term_id,
      "checked" : true
      }
    ];
    this.local_storage.set('aaaaaaaaaaaa', dataCategory);

    this.categories.forEach(element => {
      console.log (element.name);
    });
  }

  public storeCategories(){
    this.categories.forEach(element => {
      console.log (element.name);
    });
  }
}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the UpdateuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateuser',
  templateUrl: 'updateuser.html',
})
export class UpdateuserPage {

  user:any = {id:'', name: '', username: '', email: '', phone: ''};
id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider)
  {

    this.id = navParams.get('data');
    alert(JSON.stringify(this.id));
    this.fun_getUserData(this.id);
  }

  fun_getUserData(id) {
    this.restProvider.getUserDetail(id).then(data => {
      this.user = data;
      console.log(JSON.stringify(this.user));
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateuserPage');
  }

  updateUser()
  {
    
    this.restProvider.updateUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    
  }

}

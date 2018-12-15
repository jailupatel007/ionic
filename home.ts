import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AdduserPage } from '../adduser/adduser';
import { UpdateuserPage } from '../updateuser/updateuser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profile: any=[];
  id:any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

    this.getUsers();
  }


  getUsers() {
    this.restProvider.getUsers().then(data => {
      this.profile = data;
      console.log(JSON.stringify(this.profile));
    });
  }

  addUser()
  {
    this.navCtrl.push(AdduserPage);

  }


  updateUser(id:any)
  {
    this.navCtrl.push(UpdateuserPage ,{
      data: id
    });
  }



}

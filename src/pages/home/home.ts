import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CameraPage} from "../CameraPage/CameraPage"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

cameraPage;
  constructor(public navCtrl: NavController) {
	  this.cameraPage = CameraPage;
  }
	pushCameraPage(){
    this.navCtrl.push(CameraPage);
  }
}

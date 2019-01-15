import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-camera',
  templateUrl: 'CameraPage.html',
})
export class CameraPage {

  public base64Image;
  path: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public camera:Camera) {
  }


  doCamera(){
    const options: CameraOptions = {
      quality: 70,//图片质量
      destinationType: this.camera.DestinationType.DATA_URL,//返回base64地址
      encodingType: this.camera.EncodingType.JPEG,
     

      sourceType:this.camera.PictureSourceType.CAMERA,
      // mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true,
      targetWidth:300,  /*宽度高度要设置*/
      targetHeight:300,
      saveToPhotoAlbum:true, 
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData; //拍照地址
      console.log(this.base64Image);
	  this.path = this.base64Image;
     }, (err) => {

     });
  }


}
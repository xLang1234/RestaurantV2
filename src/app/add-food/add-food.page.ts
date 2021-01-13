import { Component, OnInit } from '@angular/core';
import { FoodmenuService } from './../services/foodmenu.service'
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera,CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {

  //Fields
  
  // Food company name
  // Food menu
  // Food:
  // name
  // Details
  // Price
  // Image

  data: any;
  file: any;
  imageSrc: any;
  constructor(private foodMenuService: FoodmenuService, private camera: Camera,  private router: Router) { 
    this.data = {};
    this.imageSrc = "";
  }

  ngOnInit() {
  }

  addFoodMenu(){
    console.log(this.data)
    this.data.id = Date.now();
    this.data.image = this.imageSrc;
    this.foodMenuService.addFoodItem(
      this.data);
    this.router.navigate(['/admin']);
  }

  getImage() {
    let cameraOptions = {
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.DATA_URL,      
          quality: 100,
          targetWidth: 1000,
          targetHeight: 1000,
          encodingType: this.camera.EncodingType.JPEG,      
          correctOrientation: true
        }
        this.camera.getPicture(cameraOptions)
          .then(file_uri =>
            this.imageSrc = "data:image/jpeg;base64," + file_uri
          ,
          err => console.log(err));
      }
    

}

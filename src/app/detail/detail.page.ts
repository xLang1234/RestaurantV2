import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodmenuService } from './../services/foodmenu.service'
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Camera,CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  food: any;
  foodId: string;
  imageSrc: any;
  constructor(private route: ActivatedRoute, private foodMenuService: FoodmenuService, private camera: Camera, private router: Router) {

    this.foodId = this.route.snapshot.params.id;
    this.food = {};
    this.imageSrc = "";
    console.log(this.foodId)
    this.foodMenuService.getFoodById(parseInt(this.foodId)).subscribe(
      x => {
        this.food = x[0];
      }
    )
      
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
            this.food.image = "data:image/jpeg;base64," + file_uri
          ,
          err => console.log(err));
      }

  update(){
    this.foodMenuService.updateFoodItem(this.food)
    this.router.navigate(['/admin']);
  }

  delete(id){
    this.foodMenuService.deleteFoodById(id)
    this.router.navigate(['/admin']);
  }

}

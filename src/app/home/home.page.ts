import { Component } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private toastCtrl: ToastController, private loadingCtl: LoadingController, private afAuth: AngularFireAuth,private navCtl: NavController, private firestore: AngularFirestore) {
    var user = this.afAuth.user;
    console.log(user)
  }

  ionicViewWillEnter(){

  }

  // async getPosts(){
  //   let loader = this.loadingCtl.create({
  //     message: "Please wait ..."
  //   });
  //   (await loader).present();

  //   try {
  //     // await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data => 
  //     //  {console.log(data);
  //     //   this.navCtl.navigateRoot("home");});
  //     this.firestore.collection
  //   } catch (error) {
  //     this.showToast(error);
  //   }
  // }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}

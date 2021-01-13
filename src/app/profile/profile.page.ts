import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../models/user.model'
import { from } from 'rxjs';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: any= "";
  user = {} as User;  
  constructor(private toastCtrl: ToastController, private loadingCtl: LoadingController, private afAuth: AngularFireAuth,private navCtl: NavController,private UserService: UserService) { }

  ngOnInit() {
    this.username = this.UserService.getUID().username;
    this.user.email = this.username;
    this.user.password = "";
  }

  async updateProfile(user: User) {
    // if (this.formValidation()) {
      let loader = this.loadingCtl.create({
        message: "Please wait ..."
      });
      (await loader).present();

      try {
        await this.afAuth.sendPasswordResetEmail(user.email).then(data => 
         {
          this.showToast("Please check you email for reset link");
          this.navCtl.navigateRoot("login");});
      } catch (error) {
        this.showToast(error);
      }

      (await loader).dismiss();
    // }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast("Enter Email");
      return false;
    }
    if (!this.user.email) {
      this.showToast("Enter Password");
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}

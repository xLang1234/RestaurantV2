import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model'
import { from } from 'rxjs';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {} as User;
  constructor(private toastCtrl: ToastController, private loadingCtl: LoadingController, private afAuth: AngularFireAuth,private navCtl: NavController) { }

  ngOnInit() {
  }

  async register(user: User) {
    if (this.formValidation()) {
      let loader = this.loadingCtl.create({
        message: "Please wait ..."
      });
      (await loader).present();

      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data => 
         {console.log(data);
          this.showToast("account created successfully");
          this.navCtl.navigateRoot("login");});
      } catch (error) {
        this.showToast(error);
      }

      (await loader).dismiss();
    }
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

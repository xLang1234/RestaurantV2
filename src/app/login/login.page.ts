import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;
  constructor(private toastCtrl: ToastController, private loadingCtl: LoadingController, private afAuth: AngularFireAuth,private navCtl: NavController, private UserService: UserService) { }

  ngOnInit() {
  }

  async login(user: User){
    if (this.formValidation()) {
      let loader = this.loadingCtl.create({
        message: "Please wait ..."
      });
      (await loader).present();

      try {
        const res = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);

          if(res.user){
            this.UserService.setUser({username : user.email,
              uid: res.user.uid})
            if(res.user.email == 'test@email.com'){
              this.navCtl.navigateRoot("admin");
            }
            else{
              
              

                
                this.navCtl.navigateRoot("home");
            }
            
           }
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

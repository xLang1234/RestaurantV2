import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  transactions: any;
  constructor(private loadingCtl: LoadingController,private toastCtrl: ToastController, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getTransactions()
  }

  async getTransactions(){
    let loader = this.loadingCtl.create({
      message: "Please wait ..."
    });
    (await loader).present();
    try {
        this.firestore.collection("transactions")
        .snapshotChanges()
        .subscribe(data => {
          this.transactions = data.map(e =>{
            console.log(e)
            return {
              id: e.payload.doc.id,
              title: e.payload.doc.get('title'),
              details: e.payload.doc.get('details'),
              price: e.payload.doc.get('price'),
              index:e.payload.newIndex+1
            }
          })
        });    
        console.log(this.transactions);
        (await loader).dismiss();
        
    } catch (error) {
      this.showToast(error);
    }
  }


  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}

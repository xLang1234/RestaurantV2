import { Product, CartService } from './../../services/cart.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
declare  let paypal: any;
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements AfterViewChecked {
 
  cart: Product[] = [];
  addScript: boolean = false;
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox:'Ab1DK6wZHRKXSrkusQXkCU_982deKSdmI-z_fMWwMgCHa0jKhEl0iuJtV4EFZRed6nSNXld-JDlktJt_',
      production: ''
    },
    commit: true,
    payment: (data, actions) =>{
      return actions.payment.create({
        payment:{
          transaction:[
            {amount:{total:45,currency: 'SGD'}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) =>{
      return actions.payment.execute().then((payment)=>{
        console.log(payment)
      })
    }
  };


  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private firestore: AngularFirestore) { }
  
  ngAfterViewChecked(): void{
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        let tot = this.getTotal();
        console.log(tot)
        if (tot > 0){

       
        // paypal.Button.render(this.paypalConfig,'#paypal-button-container');
        paypal.Buttons({

          // Set up the transaction
          createOrder: function(data, actions) {
              return actions.order.create({
                  purchase_units: [{
                      amount: {
                          value: tot
                      }
                  }]
              });
          },

          // Finalize the transaction
          onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                  // Show a success message to the buyer
                  try {
                    let prd = "";
                    this.cart.forEach(element => {
                      prd = prd+","+element.name;
                    });
                    console.log(this.firestore.collection("transactions")
                    .add({'title':"hello world",'details': prd,'price':tot}));
                    // (await loader).dismiss();
                    
                } catch (error) {
                  // this.showToast(error);
                }
                console.log(this.cartService.emptyCart());
                  alert('Transaction completed by ' + details.payer.name.given_name + '!');
                  this.navCtl.navigateRoot("home");
              });
          }


      }).render('#paypal-button-container');
      
      }else{
        alert('Add item to cart');
      }
      })
    }
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    
    // console.log(prd)

    // console.log(this.cartService.getCart())
    let tot = this.getTotal();
        console.log(tot)
        if (tot > 0){
    try {
      let prd = "";
      this.cart.forEach(element => {
        prd = prd+","+element.name;
      });
      console.log(this.firestore.collection("transactions")
      .add({'title':"hello world",'details': prd,'price':tot}));
      // (await loader).dismiss();
      
  } catch (error) {
    // this.showToast(error);
  }
}

  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject)=>{
      let scripttagElement = document.createElement('script');
      // scripttagElement.src = "https://www.paypal.com/sdk/js?client-id=AalIdmgYP7hT1Ym2thPd014Zl9vfMr0631nIrU4GsExHKiVjojHyz0bphyeNYMeHXjTkkTYhL_RLPkWo&currency=SGD";
      scripttagElement.src ="https://www.paypal.com/sdk/js?client-id=Ab1DK6wZHRKXSrkusQXkCU_982deKSdmI-z_fMWwMgCHa0jKhEl0iuJtV4EFZRed6nSNXld-JDlktJt_&currency=SGD";
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
      // console.log(paypal)
      // console.log(document.body)
      // console.log(paypal)

      // return paypal;
      
    }).then((pay)=>{
      console.log(pay)
      // paypal.Button.render(this.paypalConfig,'#paypal-button-container');
    })

  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
 
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your food as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }

  
}
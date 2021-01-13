import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuService {
  
  private foodMenuRef = firebase.firestore().collection("foodMenu");
  collectionName = "foodItem";

  constructor(private route: ActivatedRoute,  private router: Router) { 
  }

  addFoodItem(foodItem){
    return firebase.firestore().collection(this.collectionName).add(foodItem);
  }

  getAllFoodItems() {
    return new Observable(observer => {
      firebase.firestore().collection(this.collectionName).get().then(x =>{
        let allData = []
        x.forEach(y=>{
          console.log(y.data())
          allData.push(y.data())
        })
        observer.next(allData);  
      })
      
    })
    // return ;
  }

  getFoodById(id: number) {
    return new Observable(observer => {
    // Read document '/loans/<id>'
      firebase.firestore().collection(this.collectionName).where('id' , '==' , id).onSnapshot(x => {
        
        let allData = [];
        x.docs.forEach(
          y =>{
            allData.push(y.data())
          }
        )
        
        observer.next(allData);
      });
    });
  }
  deleteFoodById(id: number) {
    return firebase.firestore().collection(this.collectionName).where('id' , '==' , id).onSnapshot(x => {
        
      let allData = [];
      x.docs.forEach(
        y =>{
          y.ref.delete();
        }
      )
    });
  }

  updateFoodItem(foodItem){
      return firebase.firestore().collection(this.collectionName).where('id' , '==' ,foodItem.id).onSnapshot(x => {
        
        let allData = [];
        x.docs.forEach(
          y =>{
            console.log(y)
            y.ref.update(foodItem);
          }
        )
        this.router.navigate(['/edit-food']);
      });
  }
}

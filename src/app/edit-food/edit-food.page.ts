import { Component, OnInit } from '@angular/core';
import { FoodmenuService } from './../services/foodmenu.service'
@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.page.html',
  styleUrls: ['./edit-food.page.scss'],
})
export class EditFoodPage implements OnInit {
  constructor(private foodMenuService: FoodmenuService) { }
  foodMenu: any;
  ngOnInit() {
    this.foodMenuService.getAllFoodItems().subscribe(doc=>{
      this.foodMenu = doc;
    })
  }
}
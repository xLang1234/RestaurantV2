import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FoodmenuService } from '../services/foodmenu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private foodMenuService: FoodmenuService) { }
  foodMenu: any;
  foodMenuArr: any;
  searchVar: any;
  ngOnInit() {
    this.foodMenuService.getAllFoodItems().subscribe(doc=>{
      this.foodMenu = doc;
      this.foodMenuArr = doc;
    })
  }

  search(){
    console.log("change")
    let term = this.searchVar;
    this.foodMenu = this.foodMenuArr.filter(food =>{
      console.log(food)
      let name = food.name.toLowerCase();
      return name.indexOf(term.toLowerCase()) >= 0;
    })
  }

}

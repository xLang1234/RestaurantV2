import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  
  constructor(private router: Router) { }

  addFoodMenu(){
    this.router.navigate(['/add-food']);
  }

  deleteFoodMenu(){
    this.router.navigate(['/delete-food']);
  }

  editFoodMenu(){
    this.router.navigate(['/edit-food']);
  }

  ngOnInit() {
  }

}

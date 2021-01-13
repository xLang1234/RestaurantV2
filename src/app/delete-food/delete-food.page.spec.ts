import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteFoodPage } from './delete-food.page';

describe('DeleteFoodPage', () => {
  let component: DeleteFoodPage;
  let fixture: ComponentFixture<DeleteFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

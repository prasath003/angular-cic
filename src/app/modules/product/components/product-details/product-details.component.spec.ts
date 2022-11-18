import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductDetailsComponent} from './product-details.component';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [MatDialogModule],
      providers: [{provide: MAT_DIALOG_DATA, useValue: {}}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyElectricityComponent } from './buy-electricity.component';

describe('BuyElectricityComponent', () => {
  let component: BuyElectricityComponent;
  let fixture: ComponentFixture<BuyElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyElectricityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

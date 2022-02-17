import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElectricityStatsComponent } from './view-electricity-stats.component';

describe('ViewElectricityStatsComponent', () => {
  let component: ViewElectricityStatsComponent;
  let fixture: ComponentFixture<ViewElectricityStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewElectricityStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewElectricityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

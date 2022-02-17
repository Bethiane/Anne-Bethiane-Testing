import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BuyElectricityComponent } from './components/buy-electricity/buy-electricity.component';
import { HomeComponent } from './components/home/home.component';
import { ViewElectricityStatsComponent } from './components/view-electricity-stats/view-electricity-stats.component';

describe('AppComponent', () => {
  const routes: Routes =[
    {path: 'home', component:HomeComponent},
    {path: 'view-electricity', component:ViewElectricityStatsComponent},
    {path: 'buy-electricity', component:BuyElectricityComponent},
    {path: '', redirectTo: '/home', pathMatch:'full'}
  ];
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ViewElectricityStatsComponent,
        BuyElectricityComponent
      ],
      imports:[
        RouterModule.forRoot(routes)
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();    
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('frontend app is running!');
  });
});


  

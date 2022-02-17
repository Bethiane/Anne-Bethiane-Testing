import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyElectricityComponent } from './components/buy-electricity/buy-electricity.component';
import { ViewElectricityStatsComponent } from './components/view-electricity-stats/view-electricity-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyElectricityComponent,
    ViewElectricityStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

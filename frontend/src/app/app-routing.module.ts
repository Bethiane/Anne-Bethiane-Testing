import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyElectricityComponent } from './components/buy-electricity/buy-electricity.component';
import { ViewElectricityStatsComponent } from './components/view-electricity-stats/view-electricity-stats.component';
import {HomeComponent} from './components/home/home.component'

const routes: Routes = [
  { path: 'buy-electricity', component: BuyElectricityComponent },
  { path: 'view-electricity', component: ViewElectricityStatsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

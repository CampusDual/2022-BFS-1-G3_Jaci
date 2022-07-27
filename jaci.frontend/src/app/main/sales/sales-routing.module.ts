import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesChartsComponent } from './sales-charts/sales-charts.component';
import { SalesHomeComponent } from './sales-home/sales-home.component';


const routes: Routes = [{
  path : '',
  component: SalesHomeComponent
},
{
  path:'charts',
  component: SalesChartsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

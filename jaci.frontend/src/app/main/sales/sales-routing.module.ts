import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesChartsComponent } from './sales-charts/sales-charts.component';
import { SalesHomeComponent } from './sales-home/sales-home.component';
import { SalesNewComponent } from './sales-new/sales-new.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';

const routes: Routes = [{
  path : '',
  component: SalesHomeComponent
},
{
  path : 'new',
  component: SalesNewComponent
},
{ path:'charts',
  component: SalesChartsComponent
},
{
  path : ':sales_id',
  component: SalesDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

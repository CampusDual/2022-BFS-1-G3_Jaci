import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductNewComponent } from './product-new/product-new.component';


const routes: Routes = [{
  path : '',
  component: ProductHomeComponent
},
{
  path: "new",
  component: ProductNewComponent
},
{
  path: "charts/:id",
  component: ProductChartComponent
},
{
  path: ":id",
  component: ProductDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesClientComponent } from './sales-client/sales-client.component';
import { SalesHomeComponent } from './sales-home/sales-home.component';


const routes: Routes = [{
  path : '',
  component: SalesHomeComponent
},
{
  path : 'client/:CLIENT_ID',
  component: SalesClientComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogHomeComponent } from './catalog-home/catalog-home.component';


const routes: Routes =  [{
  path : '',
  component: CatalogHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }

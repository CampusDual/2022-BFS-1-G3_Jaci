import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersHomeComponent } from './workers-home/workers-home.component';
import { WorkersDetailComponent } from './workers-detail/workers-detail.component';
import { WorkersNewComponent } from "./workers-new/workers-new.component";


const routes: Routes = [{
  path : '',
  component: WorkersHomeComponent
},{
  path: "new",
  component: WorkersNewComponent
},
{
  path: ":id",
  component: WorkersDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }

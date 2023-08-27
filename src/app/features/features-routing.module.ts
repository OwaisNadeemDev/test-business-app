import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {
    path: 'business',
    component: BusinessComponent
  },
  // {
  //   pathMatch: 'full',
  //   component: BusinessComponent
  // }
  {
    path: "**",
    redirectTo: "business"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

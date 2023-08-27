import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
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

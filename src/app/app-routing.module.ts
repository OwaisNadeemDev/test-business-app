import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './shared/layout/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    loadChildren: ()=> import("./features/features.module").then((m)=> m.FeaturesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

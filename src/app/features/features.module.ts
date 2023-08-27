import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BusinessComponent } from './business/business.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NgbCarouselModule
  ]
})
export class FeaturesModule { }

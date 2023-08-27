import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BusinessComponent } from './business/business.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CareersComponent } from './careers/careers.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusinessComponent,
    CareersComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NgbCarouselModule,
    ReactiveFormsModule,
  ]
})
export class FeaturesModule { }

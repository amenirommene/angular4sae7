import { ApartmentService } from './../shared/apartment.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
//  providers:[ApartmentService]
})
export class TestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EKycRoutingModule } from './e-kyc-routing.module';
import { EKycComponent } from './e-kyc.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [EKycComponent],
  imports: [
    CommonModule,
    EKycRoutingModule,
    SharedModule
  ]
})
export class EKycModule { }

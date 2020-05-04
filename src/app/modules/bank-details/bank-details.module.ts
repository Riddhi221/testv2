import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailsRoutingModule } from './bank-details-routing.module';
import { BankDetailsComponent } from './bank-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [BankDetailsComponent],
  imports: [
    CommonModule,
    BankDetailsRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot()
  ]
})
export class BankDetailsModule { }

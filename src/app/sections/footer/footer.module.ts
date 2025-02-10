import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

import { ButtonModule } from 'primeng/button'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }

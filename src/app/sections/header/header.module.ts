import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { ButtonModule } from 'primeng/button'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }

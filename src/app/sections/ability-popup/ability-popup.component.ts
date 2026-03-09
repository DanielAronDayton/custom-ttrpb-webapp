import { Component } from '@angular/core';
import Ability from '../../pages/ability-tree/Model/Ability';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-ability-popup',
  templateUrl: './ability-popup.component.html',
  styleUrls: ['./ability-popup.component.scss'],
})
export class AbilityPopupComponent {

  ability!: Ability;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.ability = this.config.data.ability;
  }

  close(): void {
    this.ref.close();
  }
}

// TODO: Make the popup work with dark mode
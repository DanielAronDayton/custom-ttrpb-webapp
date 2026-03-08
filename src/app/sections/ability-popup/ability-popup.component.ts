import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import Ability from '../../pages/ability-tree/Model/Ability';

@Component({
  selector: 'app-ability-popup',
  templateUrl: './ability-popup.component.html',
  styleUrls: ['./ability-popup.component.scss']
})
export class AbilityPopupComponent {
  constructor(
    public dialogRef: DialogRef<void>,
    @Inject(DIALOG_DATA) public ability: Ability
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
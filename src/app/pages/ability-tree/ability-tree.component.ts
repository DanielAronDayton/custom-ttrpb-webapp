// Imports

import { Component, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import Ability from "./Model/Ability";
import _abilityData from "./ability-tree-data.json";
import { NonNullAssert } from '@angular/compiler';
import { Dialog } from '@angular/cdk/dialog';
import { AbilityPopupComponent } from 'src/app/sections/ability-popup/ability-popup.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

// Constant Definitions

const abilityWidth: number = 250;
const abilityHeight: number = 50;
const abilityHorizontalSpace: number = 50;
const abilityVerticalSpace: number = 50;
const abilityLeftMargin: number = 0;//50;
const abilityTopMargin: number = 0;//50;
const sizeUnit: string = "px"


// Exports

@Component({
  selector: 'app-ability-tree',
  templateUrl: './ability-tree.component.html',
  styleUrls: ['./ability-tree.component.scss'],
})
export class AbilityTreeComponent {
  abilityData: Ability[] = _abilityData as Ability[];
  container: HTMLDivElement | null = null;
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  treeLines: [number, number][][] = [];
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  ngAfterViewInit() {
    // Setup
    this.container = document.getElementById("button-holder") as HTMLDivElement;
    this.canvas = document.getElementById("ability-canvas") as HTMLCanvasElement;
    var dropdown = document.getElementById("tree-selector-dropdown") as DropdownModule;
    this.ctx = this.canvas.getContext("2d");
    
    this.canvas.width = 1500; // TODO: Calculate canvas width dynamically

    // Render the tree
    if (this.abilityData.length > 0) {
      this.CreateAbilityTree(this.abilityData[0]);
    }
  }

  RecursivePlaceButtons(ability: Ability, depth: number, height: number): number {
    let button = document.createElement("button"); // TODO: Swap out buttons for p-buttons?
    this.container!.appendChild(button);
    button.textContent = ability.name;
    button.style.position = "absolute";
    button.style.width = abilityWidth + sizeUnit;
    button.style.height = abilityHeight + sizeUnit;
    button.style.left = ((depth * (abilityWidth + abilityHorizontalSpace)) + abilityLeftMargin + sizeUnit);
    button.style.top = ((height * (abilityHeight + abilityVerticalSpace)) + abilityTopMargin + sizeUnit);
    button.style.cursor = "pointer";

    // Add click handler
    button.addEventListener('click', () => {
      this.openAbilityPopup(ability);
    });

    // Grey out unfinished abilities - TODO: Change color based on whether the ability is purchased or not
    if (ability.traits == "undefined") {
      button.style.backgroundColor = "rgba(100,100,100,100)";
    }

    if (ability.children.length == 0) {
      return height + 1;
    }
    else {
      let maxHeight = height;
      for (let index = 0; index < ability.children.length; index++) {
        if (index == 0) {
          this.treeLines.push([
            [((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2))], 
            [(((depth + 1) * (abilityWidth + abilityHorizontalSpace))), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2))]]);
        }
        else {
          this.treeLines.push([
            [((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth + (abilityHorizontalSpace * 0.5)), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2))], 
            [((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth + (abilityHorizontalSpace * 0.5)), (((maxHeight) * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2))],
            [(((depth + 1) * (abilityWidth + abilityHorizontalSpace))), (((maxHeight) * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2))]]);
        }

        maxHeight = this.RecursivePlaceButtons(ability.children[index], depth + 1, maxHeight);
      }
      return maxHeight;
    }
  }

  openAbilityPopup(ability: Ability): void {
  this.ref = this.dialogService.open(AbilityPopupComponent, {
    header: ability.name,
    width: '80%',
    height: '80%',
    styleClass: 'popup',
    // contentStyle: {
    //   'background-color': 'var(--popup-background)',
    //   'color': 'var(--popup-text)'
    // },
    data: {
      ability: ability
    }
    });
  }

  CreateAbilityTree(ability: Ability): void {
    this.treeLines = [];
    this.ctx!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    this.container!.innerHTML = "";

    let height = 0;
    for (let index = 0; index < ability.children.length; index++) {
      height = this.RecursivePlaceButtons(ability.children[index], 0, height);
    }

    // Set canvas height to fit all content with padding
    this.canvas!.height = ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2));

    // Draw lines between buttons
    this.ctx!.strokeStyle = "rgba(255,0,0,255)";
    this.ctx!.lineWidth = 5;
    let path: Path2D = new Path2D();
    for (let lineIndex = 0; lineIndex < this.treeLines.length; lineIndex++)
    {
      this.ctx!.beginPath();
      path.moveTo(this.treeLines[lineIndex][0][0], this.treeLines[lineIndex][0][1]);
      console.log("Line from " + this.treeLines[lineIndex][0][0] + ", " + this.treeLines[lineIndex][0][1] + "...");
      for (let pointIndex = 1; pointIndex < this.treeLines[lineIndex].length; pointIndex++)
      {
        path.lineTo(this.treeLines[lineIndex][pointIndex][0], this.treeLines[lineIndex][pointIndex][1]);
        console.log("\tTo Drawing line from " + this.treeLines[lineIndex][pointIndex][0] + ", " + this.treeLines[lineIndex][pointIndex][1]);
      }
      this.ctx!.closePath();
    }
    this.ctx!.stroke(path);
  }

  SelectAbilityTree(ability: Ability): void {
    this.CreateAbilityTree(ability);
  }
}
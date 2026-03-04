// Imports

import { Component, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import Ability from "./Model/Ability";
import _abilityData from "./ability-tree-data.json";
import { NonNullAssert } from '@angular/compiler';


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
  // container.appendChild(canvas);
  ctx: CanvasRenderingContext2D | null = null;

  ngAfterViewInit() {
    // Setup
    
    this.container = document.getElementById("button-holder") as HTMLDivElement;
    this.canvas = document.getElementById("ability-canvas") as HTMLCanvasElement;
    var dropdown = document.getElementById("tree-selector-dropdown") as DropdownModule;
    this.ctx = this.canvas.getContext("2d");
    
    this.canvas.width = 1500;
    this.canvas.height = 2500; // TODO: Determine this programatically

    

    
    // if (this.abilityData.length > 0)
    // {
    //   RecursivePlaceButtons(this.abilityData[0], 0, 0); // TODO: Determine starting point based on user input
    // }
  }

  RecursivePlaceButtons(ability: Ability, depth: number, height: number): number {

    let button = document.createElement("button");
    this.container!.appendChild(button);
    button.textContent = ability.name;
    button.style.position = "absolute"
    button.style.width = abilityWidth + sizeUnit;
    button.style.height = abilityHeight + sizeUnit;
    button.style.left = ((depth * (abilityWidth + abilityHorizontalSpace)) + abilityLeftMargin + sizeUnit);
    button.style.top = ((height * (abilityHeight + abilityVerticalSpace)) + abilityTopMargin + sizeUnit);
    if (ability.traits == "undefined")
    {
      button.style.backgroundColor = "rgba(100,100,100,100)"
    }

    // if (((height + 1) * (abilityHeight + abilityVerticalSpace)) + abilityTopMargin > this.canvas!.height) {
    //   this.canvas!.height = ((height + 1) * (abilityHeight + abilityVerticalSpace)) + abilityTopMargin;
    // }
    // TODO: Add some of these to the stylesheet
    // TODO: Add onclick event
    // TODO: Maybe add icons to buttons?
  
    if (ability.children.length == 0) {
        return height + 1
    }
    else {
        let maxHeight = height;
        let path: Path2D = new Path2D();
        this.ctx!.strokeStyle = "rgba(255,0,0,255)";
        this.ctx!.lineWidth = 5;
        for (let index = 0; index < ability.children.length; index++) {
  
            if (index == 0) {
                
                this.ctx!.beginPath();
                path.moveTo(((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)));
                path.lineTo((((depth + 1) * (abilityWidth + abilityHorizontalSpace))), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)))
                this.ctx!.closePath();
            }
            else {
                this.ctx!.beginPath();
                path.moveTo(((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth + (abilityHorizontalSpace * 0.5)), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)));
                path.lineTo(((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth + (abilityHorizontalSpace * 0.5)), (((maxHeight) * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)));
                path.lineTo((((depth + 1) * (abilityWidth + abilityHorizontalSpace))), (((maxHeight) * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)))
                this.ctx!.closePath();
            }
  
            maxHeight = this.RecursivePlaceButtons(ability.children[index], depth + 1, maxHeight);;
        }
        this.ctx!.stroke(path);
        return maxHeight;
    }
  }

  CreateAbilityTree(ability: Ability)
  {
    this.ctx!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    this.container!.innerHTML = ""; // Delete all existing buttons (?)
    let height = 0;

    for (let index = 0; index < ability.children.length; index++) {
      height = this.RecursivePlaceButtons(ability.children[index], 0, height);
    }
    
  }

  SelectAbilityTree(ability: Ability)
  {
    console.log(ability);
    this.CreateAbilityTree(ability);
  }
}



// export function SetupAbilitiesTree(startingPoint: number = 0) {
//   ctx!.clearRect(0, 0, canvas.width, canvas.height);
//   // ctx!.fillStyle = "blue";
//   // ctx!.fillRect(0, 0, canvas.width, canvas.height);

//   RecursivePlaceButtons(abilityData[startingPoint], 0, 0);
// }

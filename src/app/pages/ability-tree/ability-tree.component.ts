// Imports

import { Component, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import Ability from "./Model/Ability";
import _abilityData from "./ability-tree-data.json";


// Constant Definitions

const abilityWidth: number = 250;
const abilityHeight: number = 50;
const abilityHorizontalSpace: number = 50;
const abilityVerticalSpace: number = 50;
const abilityLeftMargin: number = 0;//50;
const abilityTopMargin: number = 0;//50;
const sizeUnit: string = "px"



// Setup

var container: HTMLDivElement;
// console.log(container);
var canvas: HTMLCanvasElement | null;
// console.log(canvas);
// container.appendChild(canvas);
var ctx: CanvasRenderingContext2D | null;
// canvas.width = 2000;
// canvas.height = 2000;


// Exports

@Component({
  selector: 'app-ability-tree',
  templateUrl: './ability-tree.component.html',
  styleUrls: ['./ability-tree.component.scss'],
})
export class AbilityTreeComponent {
  abilityData: any[] = [];//Ability[] = [];

  ngOnInit() {
    this.abilityData = _abilityData as Ability[];
  }

  ngAfterViewInit() {
    // Setup
    
    
    console.log(this.abilityData);
    var dropdown = document.getElementById("tree-selector-dropdown") as DropdownModule;
    container = document.getElementById("button-holder") as HTMLDivElement;
    canvas = document.getElementById("ability-canvas") as HTMLCanvasElement;
    container.appendChild(canvas);
    ctx = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 2000;

    

    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    if (this.abilityData.length > 0)
    {
      RecursivePlaceButtons(this.abilityData[0], 0, 0); // TODO: Determine starting point based on user input
    }
  }
}



// export function SetupAbilitiesTree(startingPoint: number = 0) {
//   ctx!.clearRect(0, 0, canvas.width, canvas.height);
//   // ctx!.fillStyle = "blue";
//   // ctx!.fillRect(0, 0, canvas.width, canvas.height);

//   RecursivePlaceButtons(abilityData[startingPoint], 0, 0);
// }


// Functionality

function RecursivePlaceButtons(ability: Ability, depth: number, height: number): number {

  let button = document.createElement("button");
  container.appendChild(button);
  button.textContent = ability.name;
  button.style.position = "absolute"
  button.style.width = abilityWidth + sizeUnit;
  button.style.height = abilityHeight + sizeUnit;
  button.style.left = ((depth * (abilityWidth + abilityHorizontalSpace)) + abilityLeftMargin + sizeUnit);
  button.style.top = ((height * (abilityHeight + abilityVerticalSpace)) + abilityTopMargin + sizeUnit);
  // TODO: Add some of these to the stylesheet
  // TODO: Add onclick event
  // TODO: Maybe add icons to buttons?

  if (ability.children.length == 0) {
      return height + 1
  }
  else {
      let maxHeight = height;
      let path: Path2D = new Path2D();
      ctx!.strokeStyle = "rgba(255,0,0,255)";
      ctx!.lineWidth = 5;
      for (let index = 0; index < ability.children.length; index++) {

          if (index == 0) {
              
              ctx!.beginPath();
              path.moveTo(((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)));
              path.lineTo((((depth + 1) * (abilityWidth + abilityHorizontalSpace))), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)))
              ctx!.closePath();
          }
          else {
              ctx!.beginPath();
              path.moveTo(((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth + (abilityHorizontalSpace * 0.5)), ((height * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)));
              path.lineTo(((depth * (abilityWidth + abilityHorizontalSpace)) + abilityWidth + (abilityHorizontalSpace * 0.5)), (((maxHeight) * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)));
              path.lineTo((((depth + 1) * (abilityWidth + abilityHorizontalSpace))), (((maxHeight) * (abilityHeight + abilityVerticalSpace)) + (abilityHeight / 2)))
              ctx!.closePath();
          }

          maxHeight = RecursivePlaceButtons(ability.children[index], depth + 1, maxHeight);;
      }
      ctx!.stroke(path);
      return maxHeight;
  }
}

// function GetAbilityTreeOptions()
// {
//   let 
//   for (let index = 0; index < abilityData.length; index++)
//   {
    
//   }
// }
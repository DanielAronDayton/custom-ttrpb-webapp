import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ResumeComponent } from './pages/resume/resume.component';
import { AbilityTreeComponent } from './pages/ability-tree/ability-tree.component';
import { RulesComponent } from './pages/rules/rules.component';

const routes: Routes = [
  { path: "", component: RulesComponent, title: "Rules" },
  { path: "ability-tree", component: AbilityTreeComponent, title: "Ability Tree"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

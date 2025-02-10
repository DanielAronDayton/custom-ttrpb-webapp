import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { ResumeComponent } from './pages/resume/resume.component';
import { AbilityTreeComponent } from './pages/ability-tree/ability-tree.component';

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Home" },
  // { path: "resume", component: ResumeComponent, title: "Resume"},
  { path: "ability-tree", component: AbilityTreeComponent, title: "Ability Tree"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

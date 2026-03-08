import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './sections/header/header.module';
import { SidebarModule } from './sections/sidebar/sidebar.module';
// import { ResumeComponent } from './pages/resume/resume.component';
import { FooterModule } from './sections/footer/footer.module';
import { AbilityTreeComponent } from './pages/ability-tree/ability-tree.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RulesComponent } from './pages/rules/rules.component';
import { AbilityPopupComponent } from './sections/ability-popup/ability-popup.component';
import { DialogModule } from '@angular/cdk/dialog';


@NgModule({
  declarations: [
    AppComponent,
    // ResumeComponent,
    AbilityTreeComponent,
    RulesComponent,
    AbilityPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    DropdownModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

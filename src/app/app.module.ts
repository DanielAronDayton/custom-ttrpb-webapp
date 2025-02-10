import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './sections/header/header.module';
import { SidebarModule } from './sections/sidebar/sidebar.module';
import { HomeComponent } from './pages/home/home.component';
// import { ResumeComponent } from './pages/resume/resume.component';
import { FooterModule } from './sections/footer/footer.module';
import { AbilityTreeComponent } from './pages/ability-tree/ability-tree.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ResumeComponent,
    AbilityTreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

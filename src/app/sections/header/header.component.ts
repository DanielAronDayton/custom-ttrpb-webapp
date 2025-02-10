import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.scss']
})
export class HeaderComponent implements AfterViewInit {
  //appTheme: string | null = null;
  //rootselector = document.querySelector(':root')!;

  ngAfterViewInit(): void {
    
  }

  ToggleTheme() {
    //this.rootselector = getComputedStyle(document.querySelector(':root')!);
    document.body.classList.toggle("dark-mode");
    //this.appTheme = document.documentElement.style.getPropertyValue("dark-mode");
    //console.log("App theme:", this.appTheme);
  }
}

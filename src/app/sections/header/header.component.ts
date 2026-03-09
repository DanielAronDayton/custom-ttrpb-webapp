import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.scss']
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  ToggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
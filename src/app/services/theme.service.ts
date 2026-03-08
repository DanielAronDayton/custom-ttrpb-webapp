import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private readonly DARK_MODE_CLASS = 'dark-mode';

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme === 'dark') {
      document.body.classList.add(this.DARK_MODE_CLASS);
    }
  }

  toggleTheme(): void {
    document.body.classList.toggle(this.DARK_MODE_CLASS);
    const isDarkMode = document.body.classList.contains(this.DARK_MODE_CLASS);
    localStorage.setItem(this.THEME_KEY, isDarkMode ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.DARK_MODE_CLASS);
  }
}
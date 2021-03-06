import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { routes } from './app-routing.module';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Component({
  selector: 'jankless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly LS_KEY = 'theme';
  public routes = routes;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.themeClass = this.theme;
  }

  get theme() {
    return this.userColorScheme || this.preferredColorScheme || Theme.Light;
  }

  set theme(name: Theme) {
    this.userColorScheme = name;
  }

  toggleTheme() {
    this.theme = this.themeClass = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
  }

  set themeClass(name: Theme) {
    this.renderer.removeClass(document.body, Theme.Dark);
    this.renderer.removeClass(document.body, Theme.Light);
    this.renderer.addClass(document.body, name);
  }

  get preferredColorScheme(): Theme {
    // if (isPlatformBrowser(this.platformId)) {
    //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     return Theme.Dark;
    //   }
    // }
    return Theme.Light;
  }

  get userColorScheme(): Theme {
    return localStorage.getItem(this.LS_KEY) as Theme;
  }

  set userColorScheme(name: Theme) {
    localStorage.setItem(this.LS_KEY, name);
  }

  get date(): Date {
    return new Date();
  }
}

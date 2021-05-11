import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export interface RouteMeta {
  metaTitle?: string;
  metaDescription?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private route: ActivatedRoute, private router: Router, private title: Title, private meta: Meta) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const { metaTitle, metaDescription } = this.route?.firstChild?.snapshot.data as RouteMeta;
        if (metaTitle) {
          this.metaTitle = metaTitle;
        }

        if (metaDescription) {
          this.metaDescription = metaDescription;
        }
      }
    });
  }

  set metaTitle(value: string) {
    this.title.setTitle(value);
  }

  set metaDescription(value: string) {
    this.meta.updateTag({ name: 'description', content: value });
  }
}

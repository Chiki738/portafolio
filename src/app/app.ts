import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { DialogComponent } from './components/dialog';
import { FooterComponent } from './components/footer';
import { NavigationComponent } from './components/navigation';

@Component({
  selector: 'app-root',
  imports: [DialogComponent, FooterComponent, NavigationComponent, RouterOutlet],
  template: `
    <div class="min-h-screen bg-white text-gray-950 transition-colors dark:bg-gray-950 dark:text-white">
      <app-navigation />
      <main class="pt-16">
        <router-outlet />
      </main>
      <app-footer />
      <app-dialog [isOpen]="showWelcomeDialog" (close)="closeWelcomeDialog()" />
    </div>
  `,
})
export class App implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected showWelcomeDialog = true;

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => this.getDeepestRoute(this.activatedRoute)),
      )
      .subscribe((route) => {
        const pageTitle = route.snapshot.title ?? 'Portafolio | Chiki';
        const description =
          route.snapshot.data['description'] ??
          'Portafolio de Carlos Alzamora (@Chiki). Ingeniería de Sistemas y Desarrollador';

        this.title.setTitle(pageTitle);
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:title', content: pageTitle });
        this.meta.updateTag({ property: 'og:description', content: description });
      });
  }

  protected closeWelcomeDialog(): void {
    this.showWelcomeDialog = false;
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}

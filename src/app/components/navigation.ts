import { Component, HostListener, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Router } from '@angular/router';

type NavItem = {
  id: string;
  label: string;
  icon: 'home' | 'user' | 'folder' | 'award' | 'github' | 'file';
  external: boolean;
};

@Component({
  selector: 'app-navigation',
  imports: [NgTemplateOutlet],
  template: `
    <nav
      class="fixed left-0 right-0 top-0 z-50 transition-transform duration-500 ease-in-out"
      [class.translate-y-0]="isVisible"
      [class.-translate-y-full]="!isVisible"
    >
      <div
        class="border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90"
      >
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <button
            type="button"
            class="group flex cursor-pointer select-none items-center gap-3"
            (click)="handleNavigate(navItems[0])"
          >
            <span
              class="relative size-10 overflow-hidden rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
            >
              <img src="/assets/perfilAnimado.jpg" alt="Logo" class="size-full object-cover" />
            </span>
            <span
              class="text-xl font-bold text-gray-800 transition-colors group-hover:text-yellow-600 dark:text-white dark:group-hover:text-yellow-400"
            >
              Portafolio
            </span>
          </button>

          <div class="hidden min-[996px]:flex items-center gap-1">
            @for (item of navItems; track item.id) {
              <button
                type="button"
                class="group relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
                [class.bg-yellow-100/50]="isActive(item)"
                [class.text-yellow-700]="isActive(item)"
                [class.dark:bg-yellow-900/20]="isActive(item)"
                [class.dark:text-yellow-400]="isActive(item)"
                [class.text-gray-600]="!isActive(item)"
                [class.dark:text-gray-300]="!isActive(item)"
                [class.hover:bg-yellow-50/50]="!isActive(item)"
                [class.dark:hover:bg-gray-800/50]="!isActive(item)"
                [class.hover:text-yellow-600]="!isActive(item)"
                [class.dark:hover:text-yellow-400]="!isActive(item)"
                (click)="handleNavigate(item)"
              >
                <span
                  class="transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <ng-container
                    [ngTemplateOutlet]="iconTemplate"
                    [ngTemplateOutletContext]="{ icon: item.icon }"
                  />
                </span>
                {{ item.label }}
                @if (isActive(item)) {
                  <span
                    class="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full bg-yellow-500"
                  ></span>
                } @else {
                  <span
                    class="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-yellow-400/50 transition-all duration-300 group-hover:w-1/2"
                  ></span>
                }
              </button>
            }
          </div>

          <button
            type="button"
            class="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 min-[996px]:hidden"
            aria-label="Abrir menu"
            (click)="toggleMobileMenu()"
          >
            @if (isMobileMenuOpen) {
              <ng-container
                [ngTemplateOutlet]="iconTemplate"
                [ngTemplateOutletContext]="{ icon: 'x' }"
              />
            } @else {
              <ng-container
                [ngTemplateOutlet]="iconTemplate"
                [ngTemplateOutletContext]="{ icon: 'menu' }"
              />
            }
          </button>
        </div>

        @if (isMobileMenuOpen) {
          <div
            class="absolute left-0 right-0 top-16 border-t border-gray-100 bg-white/95 shadow-xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/95 min-[996px]:hidden"
          >
            <div class="space-y-2 p-4">
              @for (item of navItems; track item.id) {
                <button
                  type="button"
                  class="flex w-full cursor-pointer items-center gap-3 rounded-xl p-3 transition-all duration-200"
                  [class.border-l-4]="isActive(item)"
                  [class.border-yellow-500]="isActive(item)"
                  [class.bg-yellow-50]="isActive(item)"
                  [class.pl-6]="isActive(item)"
                  [class.font-semibold]="isActive(item)"
                  [class.text-yellow-700]="isActive(item)"
                  [class.dark:bg-yellow-900/20]="isActive(item)"
                  [class.dark:text-yellow-400]="isActive(item)"
                  [class.text-gray-600]="!isActive(item)"
                  [class.dark:text-gray-400]="!isActive(item)"
                  [class.hover:bg-yellow-50/50]="!isActive(item)"
                  [class.dark:hover:bg-gray-800]="!isActive(item)"
                  [class.hover:pl-6]="!isActive(item)"
                  [class.hover:text-yellow-600]="!isActive(item)"
                  [class.dark:hover:text-yellow-400]="!isActive(item)"
                  (click)="handleNavigate(item)"
                >
                  <span aria-hidden="true">
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: item.icon }"
                    />
                  </span>
                  {{ item.label }}
                </button>
              }
            </div>
          </div>
        }
      </div>
    </nav>

    <ng-template #iconTemplate let-icon="icon">
      @switch (icon) {
        @case ('menu') {
          <svg
            class="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        }
        @case ('x') {
          <svg
            class="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        }
        @case ('home') {
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m3 11 9-8 9 8" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
          </svg>
        }
        @case ('user') {
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
        @case ('folder') {
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
            <path d="M8 15h8" />
          </svg>
        }
        @case ('award') {
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="m8.5 12.5-1 8 4.5-2.5 4.5 2.5-1-8" />
          </svg>
        }
        @case ('github') {
          <svg class="size-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        @case ('file') {
          <svg
            class="size-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h5" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class NavigationComponent {
  private readonly router = inject(Router);
  private lastScrollY = 0;

  protected isVisible = true;
  protected isMobileMenuOpen = false;
  protected readonly navItems: NavItem[] = [
    { id: '/', label: 'Inicio', icon: 'home', external: false },
    { id: '/sobreMi', label: 'Sobre Mi', icon: 'user', external: false },
    { id: '/proyectos', label: 'Proyectos', icon: 'folder', external: false },
    { id: '/certificados', label: 'Certificados', icon: 'award', external: false },
    { id: 'https://github.com/Chiki738', label: 'GitHub', icon: 'github', external: true },
    {
      id: 'https://drive.google.com/file/d/1qLanXs509m3tyKxxHEIIDXDgvWtGZSb0/view?usp=sharing',
      label: 'Mi CV',
      icon: 'file',
      external: true,
    },
  ];

  @HostListener('window:scroll')
  protected onScroll(): void {
    const currentScrollY = window.scrollY;
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      this.isVisible = false;
      this.isMobileMenuOpen = false;
    } else {
      this.isVisible = true;
    }
    this.lastScrollY = currentScrollY;
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  protected handleNavigate(item: NavItem): void {
    if (item.external) {
      window.open(item.id, '_blank', 'noopener,noreferrer');
      return;
    }

    void this.router.navigateByUrl(item.id);
    this.isMobileMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  protected isActive(item: NavItem): boolean {
    if (item.external) {
      return false;
    }

    return item.id === '/' ? this.router.url === '/' : this.router.url.startsWith(item.id);
  }
}

import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type SocialLink = {
  name: string;
  icon: 'github' | 'linkedin' | 'mail';
  url: string;
  colorClass: string;
};

@Component({
  selector: 'app-footer',
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <footer
      class="relative overflow-hidden border-t border-gray-800 bg-gray-950 pb-8 pt-12 text-gray-300"
    >
      <div
        class="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        aria-hidden="true"
      ></div>
      <div
        class="absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 bg-teal-400/20 blur-[20px]"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center space-y-8">
          <div class="flex items-center gap-8">
            @for (link of socialLinks; track link.name) {
              <a
                [href]="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="transform text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                [ngClass]="link.colorClass"
                [attr.aria-label]="link.name"
              >
                <ng-container
                  [ngTemplateOutlet]="iconTemplate"
                  [ngTemplateOutletContext]="{ icon: link.icon, size: 'size-6' }"
                />
              </a>
            }
          </div>

          <div
            class="h-px w-24 bg-gradient-to-r from-transparent via-gray-700 to-transparent"
            aria-hidden="true"
          ></div>

          <div class="space-y-3 text-center">
            <p
              class="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-400"
            >
              Desarrollado con
              <span
                class="inline-flex items-center gap-1 rounded-full border border-red-900/50 bg-red-950/30 px-2 py-0.5 text-red-400"
              >
                <svg
                  class="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2 3 6l1.5 13L12 22l7.5-3L21 6Z" />
                  <path d="M12 5v14" />
                  <path d="m7 7 5-2 5 2" />
                </svg>
                Angular
              </span>
              &
              <span
                class="inline-flex items-center gap-1 rounded-full border border-sky-900/50 bg-sky-950/30 px-2 py-0.5 text-sky-400"
              >
                <svg
                  class="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12c2.5-4 5-4 7.5-1.5S16.5 13 20 9" />
                  <path d="M4 17c2.5-4 5-4 7.5-1.5S16.5 18 20 14" />
                </svg>
                Tailwind
              </span>
            </p>

            <p class="text-xs font-medium text-gray-600">
              © {{ currentYear }} - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="fixed bottom-6 right-6 z-50 rounded-full bg-teal-500 p-3 text-white shadow-lg shadow-teal-500/20 transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:bg-teal-400 hover:shadow-teal-500/40 active:scale-95"
        [class.translate-y-0]="isVisible"
        [class.opacity-100]="isVisible"
        [class.translate-y-20]="!isVisible"
        [class.opacity-0]="!isVisible"
        [class.pointer-events-none]="!isVisible"
        aria-label="Volver arriba"
        (click)="scrollToTop()"
      >
        <svg
          class="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </footer>

    <ng-template #iconTemplate let-icon="icon" let-size="size">
      @switch (icon) {
        @case ('github') {
          <svg [class]="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
              clip-rule="evenodd"
            />
          </svg>
        }
        @case ('linkedin') {
          <svg [class]="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"
            />
          </svg>
        }
        @case ('mail') {
          <svg
            [class]="size"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 4h16v16H4z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected isVisible = false;
  protected readonly socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/Chiki738',
      colorClass: 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/carlos-alzamora-chiki/',
      colorClass: 'hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]',
    },
    {
      name: 'Email',
      icon: 'mail',
      url: 'mailto:carlosalzamorah@gmail.com',
      colorClass: 'hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]',
    },
  ];

  @HostListener('window:scroll')
  protected toggleVisibility(): void {
    this.isVisible = window.scrollY > 300;
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

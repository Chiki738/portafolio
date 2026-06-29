import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

type SocialButton = {
  name: string;
  icon: 'github' | 'linkedin' | 'message' | 'file' | 'mail';
  url: string;
  color: string;
  textColor: string;
};

@Component({
  selector: 'app-home-page',
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <section
      class="fondo-animado relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 pb-12 pt-24"
    >
      <div
        class="absolute left-10 top-20 size-72 rounded-full bg-yellow-300 opacity-20 blur-3xl mix-blend-multiply animate-blob"
        aria-hidden="true"
      ></div>
      <div
        class="animation-delay-2000 absolute right-10 top-20 size-72 rounded-full bg-orange-300 opacity-20 blur-3xl mix-blend-multiply animate-blob"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto w-full max-w-7xl">
        <div class="flex flex-col items-center justify-center gap-12 md:flex-row lg:gap-20">
          <div class="group relative flex-shrink-0 animate-fade-left">
            <div
              class="absolute -inset-1 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-30 blur transition duration-500 group-hover:opacity-50"
              aria-hidden="true"
            ></div>
            <div
              class="relative size-64 overflow-hidden rounded-full border-4 border-white/50 shadow-2xl dark:border-gray-800/50 md:size-80 lg:size-96"
            >
              <img
                src="/assets/perfil.jpg"
                alt="Carlos Alzamora"
                class="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div class="max-w-2xl flex-1 space-y-6 text-center md:text-left">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100/80 px-3 py-1 text-sm font-semibold text-green-700 backdrop-blur-sm animate-fade-up dark:border-green-800 dark:bg-green-900/30 dark:text-green-400"
            >
              <span class="relative flex size-2.5">
                <span
                  class="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"
                ></span>
                <span class="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
              </span>
              Disponible para trabajar
            </div>

            <div class="space-y-2">
              <h1
                class="animate-fade-up text-5xl font-extrabold leading-tight tracking-tight text-gray-900 delay-100 dark:text-white md:text-6xl lg:text-7xl"
              >
                Hola, soy <br />
                <span
                  class="animate-pulse-slow bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
                >
                  Carlos Alzamora
                </span>
              </h1>

              <h2
                class="animate-fade-up text-xl font-medium text-gray-600 delay-200 dark:text-gray-300 md:text-2xl"
              >
                Ingeniero de Sistemas e Informatica
              </h2>
            </div>

            <p
              class="animate-fade-up text-lg leading-relaxed text-gray-600 delay-300 dark:text-gray-400"
            >
              Profesional proactivo y adaptable con experiencia en
              <strong class="text-gray-800 dark:text-gray-200">
                desarrollo web Full Stack
              </strong>
              y soporte tecnico. Me enfoco en la mejora continua y la resolucion eficiente de
              problemas, aportando soluciones seguras y de calidad en entornos colaborativos.
            </p>

            <div class="w-full pt-4">
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                @for (button of socialButtons; track button.name; let index = $index) {
                  <a
                    class="animate-fade-up group relative flex transform items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
                    [ngClass]="[button.color, button.textColor]"
                    [style.animation-delay]="400 + index * 100 + 'ms'"
                    [href]="button.url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      class="absolute inset-0 size-full -translate-x-full -skew-x-12 bg-white/20 group-hover:animate-shine"
                      aria-hidden="true"
                    ></span>
                    <span class="relative transition-transform group-hover:rotate-12 group-hover:scale-110">
                      <ng-container
                        [ngTemplateOutlet]="iconTemplate"
                        [ngTemplateOutletContext]="{ icon: button.icon }"
                      />
                    </span>
                    <span class="relative">{{ button.name }}</span>
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ng-template #iconTemplate let-icon="icon">
      @switch (icon) {
        @case ('github') {
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" clip-rule="evenodd" />
          </svg>
        }
        @case ('linkedin') {
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
          </svg>
        }
        @case ('message') {
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-1.1 4.1 8.5 8.5 0 0 1-7.4 4.4 8.38 8.38 0 0 1-4.1-1.1L3 21l2.1-5.4A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.4-7.4A8.38 8.38 0 0 1 12.5 3H13a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
        }
        @case ('file') {
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h5" />
          </svg>
        }
        @case ('mail') {
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16v16H4z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class HomePage {
  protected readonly socialButtons: SocialButton[] = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/Chiki738',
      color: 'bg-gray-800 hover:bg-black border border-gray-700',
      textColor: 'text-white',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/carlos-alzamora-chiki/',
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white',
    },
    {
      name: 'WhatsApp',
      icon: 'message',
      url: 'https://wa.me/51956299119?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20quisiera%20contactarte.',
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white',
    },
    {
      name: 'Mi CV',
      icon: 'file',
      url: 'https://drive.google.com/file/d/1PjvKJRrzq0GJrM2c7pLGxUgkA1X_RCFv/view?usp=sharing',
      color: 'bg-yellow-400 hover:bg-yellow-500',
      textColor: 'text-gray-900',
    },
    {
      name: 'Email',
      icon: 'mail',
      url: 'mailto:carlosalzamorah@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-white',
    },
  ];
}

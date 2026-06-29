import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    @if (isOpen) {
      <div class="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center p-4">
        <button
          type="button"
          class="absolute inset-0 cursor-pointer bg-black/50 backdrop-blur-sm animate-modal-fade"
          aria-label="Cerrar dialogo"
          (click)="close.emit()"
        ></button>

        <div
          class="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-modal-fade dark:bg-gray-800"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
        >
          <button
            type="button"
            class="absolute right-4 top-4 cursor-pointer text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Cerrar"
            (click)="close.emit()"
          >
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
          </button>

          <div class="text-center">
            <h2
              id="welcome-title"
              class="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
            >
              Bienvenido a mi Portafolio!
            </h2>

            <p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Visita mi repositorio del portafolio para reportar errores o dejar recomendaciones.
            </p>

            <div class="space-y-3 animate-buttons-entry">
              <a
                href="https://github.com/Chiki738/portafolio"
                target="_blank"
                rel="noopener noreferrer"
                class="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 py-3 font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Ir al Repositorio</span>
              </a>

              <button
                type="button"
                class="w-full cursor-pointer rounded-lg bg-yellow-300 py-3 font-medium text-black shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
                (click)="close.emit()"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class DialogComponent {
  @Input({ required: true }) isOpen = false;
  @Output() readonly close = new EventEmitter<void>();
}

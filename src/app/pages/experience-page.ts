import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  imports: [NgTemplateOutlet],
  template: `
    <section
      class="relative min-h-screen overflow-hidden bg-[#f7fbf8] pb-20 pt-24 transition-colors duration-500 dark:bg-gray-950"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,118,110,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,.05)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div class="space-y-6 text-center animate-fade-up">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Experiencia <span class="relative text-teal-700 dark:text-teal-300">Laboral</span>
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Trayectoria profesional y proyectos en los que he participado.
          </p>
        </div>

        <div class="animate-fade-up delay-100">
          <article
            class="relative rounded-2xl border border-teal-100 bg-white/80 p-6 shadow-xl shadow-teal-900/5 backdrop-blur-md dark:border-teal-900/50 dark:bg-gray-900/80 md:p-10"
          >
            <!-- Timeline Line -->
            <div
              class="absolute bottom-10 left-10 top-10 hidden w-0.5 bg-gradient-to-b from-teal-500 to-transparent md:block dark:from-teal-600"
              aria-hidden="true"
            ></div>

            <div class="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              <!-- Icon/Marker -->
              <div class="hidden flex-shrink-0 md:block">
                <div
                  class="relative z-10 flex size-12 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg ring-4 ring-white dark:ring-gray-900"
                >
                  <ng-container
                    [ngTemplateOutlet]="iconTemplate"
                    [ngTemplateOutletContext]="{ icon: 'briefcase', size: 'size-6' }"
                  />
                </div>
              </div>

              <!-- Content -->
              <div class="flex-grow">
                <div class="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                      Soporte a Laboratorio (DUIS)
                    </h2>
                    <h3 class="text-lg font-medium text-teal-700 dark:text-teal-400">
                      Universidad de Lima
                    </h3>
                  </div>
                  <div
                    class="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:border-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                  >
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: 'calendar', size: 'size-4' }"
                    />
                    2 de Marzo del 2026 - Actualidad
                  </div>
                </div>

                <!-- Chips de Tecnologías/Habilidades clave para Reclutadores -->
                <div class="mb-6 flex flex-wrap gap-2">
                  <span class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Troubleshooting</span>
                  <span class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Redes / IP</span>
                  <span class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Scripts BAT</span>
                  <span class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Mantenimiento de Hardware</span>
                  <span class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Soporte Técnico Nivel 1</span>
                </div>

                <div class="space-y-4">
                  <p class="text-gray-700 dark:text-gray-300 font-medium">
                    Durante mis prácticas en la Universidad de Lima, desarrollé las siguientes actividades principales:
                  </p>
                  
                  <ul class="space-y-3">
                    @for (bullet of experienceBullets; track bullet) {
                      <li class="flex items-start gap-3">
                        <span class="mt-1 flex-shrink-0 text-teal-500 dark:text-teal-400">
                          <ng-container
                            [ngTemplateOutlet]="iconTemplate"
                            [ngTemplateOutletContext]="{ icon: 'check-circle', size: 'size-5' }"
                          />
                        </span>
                        <span class="text-gray-600 dark:text-gray-400" [innerHTML]="bullet"></span>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ng-template #iconTemplate let-icon="icon" let-size="size">
      @switch (icon) {
        @case ('briefcase') {
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
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        }
        @case ('calendar') {
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
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        }
        @case ('check-circle') {
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
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class ExperiencePage {
  protected readonly experienceBullets = [
    'Diagnóstico y troubleshooting de incidencias de <strong>hardware, software y conectividad (redes e IP)</strong>.',
    'Automatización de instalaciones y configuraciones masivas mediante <strong>scripts BAT</strong>, optimizando tiempos de respuesta.',
    'Despliegue de imágenes y preparación técnica integral de <strong>laboratorios para inicio de clases</strong>.',
    'Soporte técnico de primera línea, encargándome de la <strong>documentación y escalamiento de incidencias</strong>.',
  ];
}

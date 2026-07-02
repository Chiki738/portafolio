import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

type CertificateIcon = 'spreadsheet' | 'branch' | 'languages' | 'monitor';

type Certificate = {
  title: string;
  fullTitle: string;
  description: string;
  institution: string;
  date: string;
  icon: CertificateIcon;
  driveUrl: string;
  color: string;
};

@Component({
  selector: 'app-certificates-page',
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <section
      class="relative min-h-screen overflow-hidden bg-[#f7fbf8] pb-20 pt-24 transition-colors duration-500 dark:bg-gray-950"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,118,110,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,.05)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center animate-fade-up">
          <h1 class="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Mis
            <span class="relative inline-block text-teal-700 dark:text-teal-300">Certificados</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Validación oficial de mis conocimientos y el resultado de mi compromiso con la
            especialización técnica constante.
          </p>
        </div>

        <div class="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (certificate of certificates; track certificate.title; let index = $index) {
            <article
              class="group relative flex flex-col overflow-hidden rounded-lg border border-teal-900/10 bg-white/90 shadow-lg shadow-teal-950/5 transition-all duration-300 animate-fade-up hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 dark:border-teal-300/10 dark:bg-gray-900 dark:hover:shadow-teal-900/10"
              [style.animation-delay]="index * 100 + 'ms'"
            >
              <div
                class="relative h-28 overflow-hidden bg-gradient-to-r p-6"
                [ngClass]="certificate.color"
              >
                <div
                  class="absolute right-0 top-0 size-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150"
                  aria-hidden="true"
                ></div>

                <div class="relative z-10 flex items-start justify-between">
                  <div
                    class="rounded-lg border border-white/20 bg-white/20 p-3 text-white shadow-inner backdrop-blur-md"
                  >
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: certificate.icon, size: 'size-8' }"
                    />
                  </div>
                  <span
                    class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-md"
                  >
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: 'calendar', size: 'size-3' }"
                    />
                    {{ certificate.date }}
                  </span>
                </div>
              </div>

              <div class="flex flex-1 flex-col p-6">
                <h3
                  class="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300"
                >
                  {{ certificate.title }}
                </h3>
                <h4 class="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {{ certificate.fullTitle }}
                </h4>

                <p class="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {{ certificate.description }}
                </p>

                <div class="space-y-4">
                  <div
                    class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700/50 dark:bg-gray-800/50"
                  >
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{
                        icon: 'building',
                        size: 'size-[18px] text-teal-600',
                      }"
                    />
                    <span class="line-clamp-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {{ certificate.institution }}
                    </span>
                  </div>

                  <a
                    [href]="certificate.driveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group/btn relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-gray-100 bg-white py-3 text-sm font-bold text-gray-700 transition-all duration-300 hover:border-teal-500 hover:text-teal-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-teal-400 dark:hover:text-teal-300"
                  >
                    <span class="relative z-10 flex items-center gap-2">
                      Ver Credencial
                      <ng-container
                        [ngTemplateOutlet]="iconTemplate"
                        [ngTemplateOutletContext]="{ icon: 'external', size: 'size-4' }"
                      />
                    </span>
                    <span
                      class="absolute inset-0 bg-teal-50 opacity-0 transition-opacity group-hover/btn:opacity-100 dark:bg-teal-900/10"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          }
        </div>

        <div class="animate-fade-up delay-300">
          <div
            class="relative rounded-lg bg-gradient-to-br from-teal-600 to-emerald-500 p-1 shadow-2xl shadow-teal-950/10"
          >
            <div
              class="relative overflow-hidden rounded-md bg-white p-8 text-center dark:bg-gray-900 md:p-12"
            >
              <div
                class="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(30deg,rgba(234,179,8,.12)_12%,transparent_12.5%,transparent_87%,rgba(234,179,8,.12)_87.5%,rgba(234,179,8,.12)),linear-gradient(150deg,rgba(234,179,8,.12)_12%,transparent_12.5%,transparent_87%,rgba(234,179,8,.12)_87.5%,rgba(234,179,8,.12))] [background-size:32px_56px]"
                aria-hidden="true"
              ></div>

              <div class="relative z-10 flex flex-col items-center">
                <div
                  class="mb-6 flex size-16 items-center justify-center rounded-full bg-teal-50 text-teal-700 animate-bounce-slow dark:bg-teal-900/30 dark:text-teal-300"
                >
                  <ng-container
                    [ngTemplateOutlet]="iconTemplate"
                    [ngTemplateOutletContext]="{ icon: 'graduation', size: 'size-8' }"
                  />
                </div>

                <h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Aprendizaje Continuo
                </h2>

                <p
                  class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                >
                  "Mi compromiso con la excelencia técnica me impulsa a mantenerme siempre
                  actualizado. Cada certificación es un paso más hacia soluciones más robustas y
                  eficientes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ng-template #iconTemplate let-icon="icon" let-size="size">
      @switch (icon) {
        @case ('spreadsheet') {
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h8" />
            <path d="M11 10v10" />
          </svg>
        }
        @case ('branch') {
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
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M9 6h3a6 6 0 0 1 6 6v3" />
            <path d="M6 9v12" />
          </svg>
        }
        @case ('languages') {
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
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>
        }
        @case ('monitor') {
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
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
          </svg>
        }
        @case ('calendar') {
          <svg
            [class]="size"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
        }
        @case ('building') {
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
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
            <path d="M6 12H4a2 2 0 0 0-2 2v8" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
          </svg>
        }
        @case ('external') {
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
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
          </svg>
        }
        @case ('graduation') {
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
            <path d="m22 10-10-5-10 5 10 5 10-5Z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class CertificatesPage {
  protected readonly certificates: Certificate[] = [
    {
      title: 'Git y GitHub',
      fullTitle: 'Control de versiones con Git',
      description:
        'Gestión profesional de código, flujos de trabajo con ramas, resolución de conflictos y colaboración.',
      institution: 'Alura Latam',
      date: '2024',
      icon: 'branch',
      driveUrl:
        'https://drive.google.com/file/d/1unyyg-HKZUFiTlct4U6xGZle9wNwV9xt/view?usp=sharing',
      color: 'from-gray-700 to-gray-900',
    },
    {
      title: 'Excel Intermedio',
      fullTitle: 'Certificación en Excel Intermedio',
      description:
        'Dominio de tablas dinámicas, funciones avanzadas, dashboards y análisis de datos eficiente.',
      institution: 'Universidad Tecnológica del Perú (UTP)',
      date: '2023',
      icon: 'spreadsheet',
      driveUrl:
        'https://drive.google.com/file/d/1cC9kQ2RNVvNXqOfg9OkHUGOBg0d2Szeo/view?usp=sharing',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Inglés A2 (MCER)',
      fullTitle: 'Certificación en Inglés A2',
      description:
        'Comprensión lectora y auditiva, con capacidad de comunicación básica en entornos técnicos y cotidianos.',
      institution: 'Universidad Tecnológica del Perú (UTP)',
      date: '2023',
      icon: 'languages',
      driveUrl:
        'https://drive.google.com/file/d/1UyZqk7mP-NUtFqdK7wXv0ZlcIZtg8_VC/view?usp=sharing',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Soporte TI (Hardware)',
      fullTitle: 'Soporte Técnico de Hardware',
      description:
        'Diagnóstico, mantenimiento preventivo/correctivo y ensamblaje de equipos de cómputo.',
      institution: 'Universidad Tecnológica del Perú (UTP)',
      date: '2023',
      icon: 'monitor',
      driveUrl:
        'https://drive.google.com/file/d/13ycyAOV7maa_AugPWhskduKYqo4B5MAq/view?usp=sharing',
      color: 'from-amber-500 to-orange-600',
    },
  ];
}

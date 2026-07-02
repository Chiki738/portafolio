import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

type SkillIcon =
  | 'users'
  | 'repeat'
  | 'lightbulb'
  | 'clock'
  | 'message'
  | 'chart'
  | 'graduation'
  | 'award'
  | 'wrench'
  | 'languages'
  | 'userCog'
  | 'check';

type SoftSkill = {
  name: string;
  icon: SkillIcon;
};

type EducationItem = {
  title: string;
  place: string;
  date: string;
  icon: SkillIcon;
  color: string;
  border: string;
};

type Level = 'Todos' | 'Avanzado' | 'Intermedio' | 'Básico';

@Component({
  selector: 'app-about-page',
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <section
      class="relative min-h-screen overflow-hidden bg-[#f7fbf8] pb-20 pt-24 transition-colors duration-500 dark:bg-gray-950"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,118,110,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,.05)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        <div class="space-y-6 text-center animate-fade-up">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Sobre <span class="relative text-teal-700 dark:text-teal-300">mí</span>
          </h1>

          <div
            class="relative mx-auto max-w-3xl rounded-lg border border-teal-900/10 bg-white/75 p-8 shadow-xl shadow-teal-950/5 backdrop-blur-md dark:border-teal-300/10 dark:bg-gray-900/70"
          >
            <div
              class="absolute -left-4 -top-4 font-serif text-6xl text-teal-600 opacity-25"
              aria-hidden="true"
            >
              "
            </div>

            <p
              class="text-center text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300"
            >
              Profesional proactivo y adaptable del área de Ingeniería de Sistemas e Informática,
              con experiencia en proyectos de desarrollo web y soporte técnico. Me enfoco en la
              mejora continua, la organización y la resolución eficiente de problemas, aportando
              soluciones seguras en entornos colaborativos.
            </p>
          </div>
        </div>

        <div class="animate-fade-up delay-100">
          <h2
            class="mb-10 flex items-center justify-center gap-3 text-center text-2xl font-bold text-gray-800 dark:text-white"
          >
            <span
              class="rounded-lg bg-teal-50 p-2 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
            >
              <ng-container
                [ngTemplateOutlet]="iconTemplate"
                [ngTemplateOutletContext]="{ icon: 'graduation', size: 'size-6' }"
              />
            </span>
            Formación Académica
          </h2>

          <div class="grid gap-6 md:grid-cols-3">
            @for (item of education; track item.title) {
              <article
                class="cursor-pointer rounded-lg border bg-white/85 p-6 shadow-lg shadow-teal-950/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900/70"
                [ngClass]="item.border"
              >
                <div
                  class="mb-4 flex size-12 items-center justify-center rounded-xl"
                  [ngClass]="item.color"
                >
                  <ng-container
                    [ngTemplateOutlet]="iconTemplate"
                    [ngTemplateOutletContext]="{ icon: item.icon, size: 'size-6' }"
                  />
                </div>
                <h3 class="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                  {{ item.title }}
                </h3>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                  {{ item.place }}
                </p>
                <div class="flex items-center gap-2">
                  <ng-container
                    [ngTemplateOutlet]="iconTemplate"
                    [ngTemplateOutletContext]="{ icon: 'check', size: 'size-3.5 text-green-500' }"
                  />
                  <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {{ item.date }}
                  </span>
                </div>
              </article>
            }
          </div>
        </div>

        <div
          class="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-white/90 p-6 shadow-2xl shadow-teal-950/5 animate-fade-up delay-200 dark:border-teal-300/10 dark:bg-gray-900 md:p-12"
        >
          <div
            class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-30 [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"
            aria-hidden="true"
          ></div>

          <div class="relative z-10">
            <h2
              class="mb-8 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
            >
              Arsenal Tecnológico
            </h2>

            <div
              class="mb-10 flex items-center gap-3 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
            >
              @for (level of levels; track level) {
                <button
                  type="button"
                  class="cursor-pointer whitespace-nowrap rounded-full border border-transparent px-6 py-2 text-sm font-bold transition-all duration-300"
                  [class.flex-shrink-0]="true"
                  [class.scale-105]="selectedLevel === level"
                  [class.bg-gradient-to-r]="selectedLevel === level"
                  [class.from-teal-600]="selectedLevel === level"
                  [class.to-emerald-500]="selectedLevel === level"
                  [class.text-white]="selectedLevel === level"
                  [class.shadow-lg]="selectedLevel === level"
                  [class.shadow-teal-500/20]="selectedLevel === level"
                  [class.bg-gray-100]="selectedLevel !== level"
                  [class.text-gray-600]="selectedLevel !== level"
                  [class.hover:bg-gray-200]="selectedLevel !== level"
                  [class.dark:bg-gray-800]="selectedLevel !== level"
                  [class.dark:text-gray-400]="selectedLevel !== level"
                  [class.dark:hover:bg-gray-700]="selectedLevel !== level"
                  [class.dark:border-gray-700]="selectedLevel !== level"
                  (click)="selectLevel(level)"
                >
                  {{ level }}
                </button>
              }
            </div>

            <div class="min-h-[160px]">
              @if (filteredTechnologies.length > 0) {
                <div class="flex flex-wrap justify-center gap-4 animate-fade-up md:gap-6">
                  @for (tech of filteredTechnologies; track tech; let index = $index) {
                    <div
                      class="group/icon relative flex cursor-pointer flex-col items-center gap-2 p-2 transition-transform duration-300 hover:-translate-y-2 md:gap-3"
                      [style.animation-delay]="index * 50 + 'ms'"
                    >
                      <div class="relative">
                        <div
                          class="absolute inset-0 rounded-full bg-teal-400/20 opacity-0 blur-lg transition-opacity group-hover/icon:opacity-100"
                          aria-hidden="true"
                        ></div>
                        <img
                          [src]="generateIconUrl(tech)"
                          [alt]="tech"
                          class="relative z-10 size-12 drop-shadow-sm transition-all group-hover/icon:drop-shadow-xl md:size-16"
                        />
                      </div>
                      <span
                        class="pointer-events-none absolute -bottom-4 z-20 whitespace-nowrap rounded-md bg-white px-2 py-0.5 text-[10px] font-bold capitalize text-gray-600 opacity-0 shadow-sm transition-opacity group-hover/icon:opacity-100 dark:bg-gray-800 dark:text-gray-400 md:text-xs"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  }
                </div>
              } @else {
                <div class="flex flex-col items-center justify-center py-10 opacity-50">
                  <div
                    class="mb-3 flex size-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
                  >
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: 'lightbulb', size: 'size-7' }"
                    />
                  </div>
                  <p class="italic text-gray-500">No hay tecnologías listadas en este nivel.</p>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="grid gap-8 animate-fade-up delay-300 md:grid-cols-2">
          <article
            class="rounded-lg border-t-4 border-blue-500 bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl dark:bg-gray-800"
          >
            <h3
              class="mb-6 flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white"
            >
              <ng-container
                [ngTemplateOutlet]="iconTemplate"
                [ngTemplateOutletContext]="{ icon: 'userCog', size: 'size-6 text-blue-500' }"
              />
              Habilidades Blandas
            </h3>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              @for (skill of softSkills; track skill.name) {
                <div
                  class="group flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <div class="text-blue-500 transition-transform group-hover:scale-110">
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: skill.icon, size: 'size-5' }"
                    />
                  </div>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {{ skill.name }}
                  </span>
                </div>
              }
            </div>
          </article>

          <article
            class="rounded-lg border-t-4 border-green-500 bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl dark:bg-gray-800"
          >
            <h3
              class="mb-6 flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white"
            >
              <ng-container
                [ngTemplateOutlet]="iconTemplate"
                [ngTemplateOutletContext]="{ icon: 'languages', size: 'size-6 text-green-500' }"
              />
              Idiomas
            </h3>
            <div class="space-y-4">
              <div
                class="flex cursor-pointer items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors hover:bg-green-50 dark:bg-gray-700/50 dark:hover:bg-green-900/10"
              >
                <div class="flex items-center gap-3">
                  <span class="size-2 rounded-full bg-green-500"></span>
                  <span class="font-bold text-gray-800 dark:text-white">Espanol</span>
                </div>
                <span
                  class="rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400"
                >
                  Nativo
                </span>
              </div>

              <div
                class="flex cursor-pointer items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors hover:bg-amber-50 dark:bg-gray-700/50 dark:hover:bg-amber-900/10"
              >
                <div class="flex items-center gap-3">
                  <span class="size-2 rounded-full bg-amber-500"></span>
                  <span class="font-bold text-gray-800 dark:text-white">Inglés</span>
                </div>
                <span
                  class="rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                >
                  Básico
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ng-template #iconTemplate let-icon="icon" let-size="size">
      @switch (icon) {
        @case ('users') {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
        @case ('repeat') {
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
            <path d="m17 2 4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <path d="m7 22-4-4 4-4" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
        }
        @case ('lightbulb') {
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
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.4 1 2h6c0-.6.3-1.4 1-2A7 7 0 0 0 12 2Z" />
          </svg>
        }
        @case ('clock') {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        }
        @case ('message') {
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
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
          </svg>
        }
        @case ('chart') {
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
            <path d="M3 3v18h18" />
            <path d="m7 16 4-4 3 3 5-7" />
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
        @case ('award') {
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
            <circle cx="12" cy="8" r="5" />
            <path d="m8.5 12.5-1 8 4.5-2.5 4.5 2.5-1-8" />
          </svg>
        }
        @case ('wrench') {
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
            <path
              d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"
            />
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
        @case ('userCog') {
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
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4-4h3" />
            <path d="M19 14v2" />
            <path d="M19 20v2" />
            <path d="M15.5 16.5 17 18l-1.5 1.5" />
            <path d="M22.5 16.5 21 18l1.5 1.5" />
          </svg>
        }
        @case ('check') {
          <svg
            [class]="size"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-5" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class AboutPage {
  protected readonly softSkills: SoftSkill[] = [
    { name: 'Trabajo en equipo', icon: 'users' },
    { name: 'Scrum / Agiles', icon: 'repeat' },
    { name: 'Resolucion de problemas', icon: 'lightbulb' },
    { name: 'Gestion del tiempo', icon: 'clock' },
    { name: 'Comunicacion efectiva', icon: 'message' },
    { name: 'Presentacion de avances', icon: 'chart' },
  ];

  protected readonly education: EducationItem[] = [
    {
      title: 'Ingeniería de Sistemas e Informática',
      place: 'Universidad Tecnológica del Perú (UTP)',
      date: '2021 - Actualidad (10 ciclo)',
      icon: 'graduation',
      color: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
      border: 'border-teal-100 dark:border-teal-800',
    },
    {
      title: 'Formación Front-End & Git',
      place: 'Alura Latam',
      date: '2024',
      icon: 'award',
      color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      border: 'border-amber-200 dark:border-amber-800',
    },
    {
      title: 'Excel Intermedio & Soporte Técnico',
      place: 'Universidad Tecnológica del Perú (UTP)',
      date: '2023',
      icon: 'wrench',
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
    },
  ];

  protected readonly levels: Level[] = ['Todos', 'Avanzado', 'Intermedio', 'Básico'];
  protected selectedLevel: Level = 'Todos';

  private readonly skillConfiguration: Record<string, Exclude<Level, 'Todos'>> = {
    html: 'Avanzado',
    css: 'Avanzado',
    js: 'Intermedio',
    ts: 'Intermedio',
    angular: 'Intermedio',
    php: 'Intermedio',
    laravel: 'Intermedio',
    tailwind: 'Intermedio',
    git: 'Intermedio',
    github: 'Intermedio',
    postman: 'Intermedio',
    vercel: 'Intermedio',
    notion: 'Intermedio',
    mysql: 'Intermedio',
    postgres: 'Intermedio',
    mongodb: 'Intermedio',
    supabase: 'Intermedio',
    java: 'Básico',
    spring: 'Básico',
    docker: 'Básico',
  };

  protected readonly allTechnologies = Object.keys(this.skillConfiguration).sort();

  protected get filteredTechnologies(): string[] {
    if (this.selectedLevel === 'Todos') {
      return this.allTechnologies;
    }

    return this.allTechnologies.filter(
      (technology) => this.skillConfiguration[technology] === this.selectedLevel,
    );
  }

  protected selectLevel(level: Level): void {
    this.selectedLevel = level;
  }

  protected generateIconUrl(technology: string): string {
    return `https://skillicons.dev/icons?i=${technology}&theme=light`;
  }
}

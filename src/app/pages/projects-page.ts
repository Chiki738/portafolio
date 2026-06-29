import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

type ProjectIcon = 'folder' | 'cart' | 'lock' | 'film' | 'settings';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: ProjectIcon;
  repoUrl: string;
  extraRepo?: string;
  color: string;
};

@Component({
  selector: 'app-projects-page',
  imports: [NgClass, NgTemplateOutlet],
  template: `
    <section
      class="relative min-h-screen overflow-hidden bg-gray-50 pb-20 pt-24 transition-colors duration-500 dark:bg-gray-950"
    >
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-gradient-to-b from-yellow-100/50 to-transparent dark:from-yellow-900/10"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center animate-fade-up">
          <h1 class="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Mis
            <span class="relative inline-block text-yellow-500">Proyectos</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Una coleccion de mis trabajos mas recientes, abarcando desde aplicaciones web
            interactivas hasta sistemas backend robustos.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (project of projects; track project.title; let index = $index) {
            <article
              class="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 animate-fade-up hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-yellow-900/10"
              [style.animation-delay]="index * 100 + 'ms'"
            >
              <div
                class="relative flex h-32 items-center justify-between overflow-hidden bg-gradient-to-r p-6"
                [ngClass]="project.color"
              >
                <div
                  class="absolute right-0 top-0 size-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                ></div>

                <div
                  class="relative z-10 rounded-2xl border border-white/20 bg-white/20 p-3 text-white shadow-inner backdrop-blur-sm"
                >
                  <ng-container
                    [ngTemplateOutlet]="iconTemplate"
                    [ngTemplateOutletContext]="{ icon: project.icon, size: 'size-8' }"
                  />
                </div>

                <span
                  class="relative z-10 rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-md"
                >
                  {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
                </span>
              </div>

              <div class="flex flex-1 flex-col p-6">
                <h3
                  class="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-yellow-600 dark:text-white dark:group-hover:text-yellow-400"
                >
                  {{ project.title }}
                </h3>

                <p class="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {{ project.description }}
                </p>

                <div class="mb-6">
                  <div class="flex flex-wrap gap-2">
                    @for (technology of project.technologies; track technology) {
                      <span
                        class="rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 transition-colors group-hover:border-yellow-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:border-yellow-900/50"
                      >
                        {{ technology }}
                      </span>
                    }
                  </div>
                </div>

                <div class="mt-auto space-y-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <a
                    [href]="project.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800 active:scale-95 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: 'github', size: 'size-[18px]' }"
                    />
                    <span>
                      {{ project.extraRepo ? 'Repositorio Frontend' : 'Ver Repositorio' }}
                    </span>
                    <ng-container
                      [ngTemplateOutlet]="iconTemplate"
                      [ngTemplateOutletContext]="{ icon: 'external', size: 'size-3.5 opacity-50' }"
                    />
                  </a>

                  @if (project.extraRepo) {
                    <a
                      [href]="project.extraRepo"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      <ng-container
                        [ngTemplateOutlet]="iconTemplate"
                        [ngTemplateOutletContext]="{ icon: 'github', size: 'size-[18px]' }"
                      />
                      <span>Repositorio Backend</span>
                    </a>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <ng-template #iconTemplate let-icon="icon" let-size="size">
      @switch (icon) {
        @case ('folder') {
          <svg [class]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
            <path d="M8 15h8" />
          </svg>
        }
        @case ('cart') {
          <svg [class]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2 2h3l3 13h11l3-9H6" />
          </svg>
        }
        @case ('lock') {
          <svg [class]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect width="18" height="11" x="3" y="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        }
        @case ('film') {
          <svg [class]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 3v18" />
            <path d="M17 3v18" />
            <path d="M3 8h18" />
            <path d="M3 16h18" />
          </svg>
        }
        @case ('settings') {
          <svg [class]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1Z" />
          </svg>
        }
        @case ('github') {
          <svg [class]="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" clip-rule="evenodd" />
          </svg>
        }
        @case ('external') {
          <svg [class]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
          </svg>
        }
      }
    </ng-template>
  `,
})
export class ProjectsPage {
  protected readonly projects: Project[] = [
    {
      title: 'Portafolio Personal',
      description:
        'Portafolio profesional diseñado para mostrar trayectoria, habilidades tecnicas y proyectos destacados con una experiencia de usuario fluida.',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'Vercel'],
      icon: 'folder',
      repoUrl: 'https://github.com/Chiki738/portafolio',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'E-commerce Marbellin',
      description:
        'Solucion integral de comercio electronico para gestion de inventario, carritos de compra y procesamiento de pedidos de ropa interior.',
      technologies: ['PHP', 'Laravel', 'Bootstrap', 'MySQL', 'Supabase'],
      icon: 'cart',
      repoUrl: 'https://github.com/Chiki738/ecommerce-marbellin',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Challenge Encriptador',
      description:
        'Herramienta logica para encriptacion y desencriptacion de mensajes basada en reglas de sustitucion, con una interfaz limpia y responsive.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      icon: 'lock',
      repoUrl: 'https://github.com/Chiki738/challenge-encriptador',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'CineFlix (Full Stack)',
      description:
        'Plataforma de streaming. Desarrolle el Frontend consumiendo una API RESTful Java/Spring Boot en la que colabore activamente.',
      technologies: ['React', 'Java', 'Spring Boot', 'MongoDB', 'Docker', 'JWT'],
      icon: 'film',
      repoUrl: 'https://github.com/Chiki738/cineflix',
      extraRepo: 'https://github.com/cj-laos/CinexFlix',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Siroc (Arquitectura Hexagonal)',
      description:
        'Sistema complejo implementando Arquitectura Hexagonal y principios Clean Code. Separacion estricta de capas de dominio e infraestructura.',
      technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Supabase'],
      icon: 'settings',
      repoUrl: 'https://github.com/Chiki738/siroc',
      extraRepo: 'https://github.com/cj-laos/hexagonal',
      color: 'from-emerald-500 to-green-600',
    },
  ];
}

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page').then((page) => page.HomePage),
    title: 'Portafolio | Chiki',
    data: {
      description:
        'Portafolio de Carlos Alzamora (@Chiki). Ingeniería de Sistemas y desarrollador web.',
    },
  },
  {
    path: 'sobreMi',
    loadComponent: () => import('./pages/about-page').then((page) => page.AboutPage),
    title: 'Sobre mí | Chiki',
    data: {
      description: 'Información personal y técnica de Carlos Alzamora.',
    },
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects-page').then((page) => page.ProjectsPage),
    title: 'Proyectos | Chiki',
    data: {
      description: 'Proyectos de desarrollo web y habilidades técnicas.',
    },
  },
  {
    path: 'certificados',
    loadComponent: () => import('./pages/certificates-page').then((page) => page.CertificatesPage),
    title: 'Certificados | Chiki',
    data: {
      description: 'Certificados y formación de Carlos Alzamora.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

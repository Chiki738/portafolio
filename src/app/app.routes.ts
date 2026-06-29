import { Routes } from '@angular/router';
import { CertificatesPage } from './pages/certificates-page';
import { HomePage } from './pages/home-page';
import { ProjectsPage } from './pages/projects-page';
import { AboutPage } from './pages/about-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Portafolio | Chiki',
    data: {
      description:
        'Portafolio de Carlos Alzamora (@Chiki). Ingeniería de Sistemas y Desarrollador',
    },
  },
  {
    path: 'sobreMi',
    component: AboutPage,
    title: 'Sobre Mi | Chiki',
    data: {
      description: 'Informacion personal y tecnica de Carlos Alzamora.',
    },
  },
  {
    path: 'proyectos',
    component: ProjectsPage,
    title: 'Proyectos | Chiki',
    data: {
      description: 'Proyectos de desarrollo web y habilidades tecnicas.',
    },
  },
  {
    path: 'certificados',
    component: CertificatesPage,
    title: 'Certificados | Chiki',
    data: {
      description: 'Certificados y formacion de Carlos Alzamora.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

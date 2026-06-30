import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import Aura from 'primeng/resources/themes/aura/theme.css';
import dotenv from 'dotenv';

dotenv.config();
const licenseKey = process.env['PRIME_LICENSE_KEY'];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: Aura,
      license: licenseKey
    }),
    provideRouter(routes)
  ]
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { CustomPreset } from './customPreset';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
        providePrimeNG({
            theme: {
                preset: CustomPreset,
                options: {
                    darkModeSelector: false || 'none',
                },
            },
        }),
    ],
};

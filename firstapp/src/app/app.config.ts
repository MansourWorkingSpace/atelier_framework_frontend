import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const environment = {
  production: false,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'firstapp-82038',
        appId: '1:87015614348:web:67ddce58fd6817c7f018a9',
        storageBucket: 'firstapp-82038.appspot.com',
        apiKey: 'AIzaSyA1alRwWoHZiXsWDHOacxVRkMjsy9L0ZVw',
        authDomain: 'firstapp-82038.firebaseapp.com',
        messagingSenderId: '87015614348',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

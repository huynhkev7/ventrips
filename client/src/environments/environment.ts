// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'Ventrips',
  slogan: 'A one-stop shop for all your travel essentials',
  url: 'https://ventrips.com',
  cloudFunctionsUrl: 'https://us-central1-ventrips-214422.cloudfunctions.net',
  firebase: {
    apiKey: 'AIzaSyBgGpL_dHoLlhRe9DvPc0aVV2m5Sq9g-Uo',
    authDomain: 'ventrips.com',
    databaseURL: 'https://ventrips-214422.firebaseio.com',
    projectId: 'ventrips-214422',
    storageBucket: 'ventrips-214422.appspot.com',
    messagingSenderId: '637747621465'
  },
  pdf: {
    resumeUrl: './assets/pdf/Johnson-Huynh-Resume.pdf',
    nanoDegreeUrl: './assets/pdf/Johnson-Huynh-Udacity-Full-Stack-Nanodegree-Certificate.pdf',
    hcdeCapstoneUrl: '/assets/pdf/Johnson-Huynh-HCDE-Capstone.pdf'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

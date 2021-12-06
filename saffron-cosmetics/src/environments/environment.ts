// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: "https://localhost:44375",
  firebase: {
    projectId: 'saffron-cosmetics',
    appId: '1:599942661945:web:7937186bc59f11d74dcae8',
    storageBucket: 'saffron-cosmetics.appspot.com',
    apiKey: 'AIzaSyDNKXiDzMG3gf2kYjRtpxX3aAE7qILDNcQ',
    authDomain: 'saffron-cosmetics.firebaseapp.com',
    messagingSenderId: '599942661945',
    measurementId: 'G-6H2JKEMGZF',
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

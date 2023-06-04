import 'zone.js/dist/zone'; // Avoid error in StackBlitz https://github.com/stackblitz/core/issues/2366
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(TModule)
  .catch((err) => console.error(err));

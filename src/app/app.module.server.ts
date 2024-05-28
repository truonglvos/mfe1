import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { TModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [TModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

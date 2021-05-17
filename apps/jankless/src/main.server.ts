import { enableProdMode } from '@angular/core';
import { applyDomino } from '@ntegral/ngx-universal-window';
import { join } from 'path';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const BROWSER_DIR = join(process.cwd(), 'dist/jankless/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

export { renderModule, renderModuleFactory } from '@angular/platform-server';
export { AppServerModule } from './app/app.server.module';

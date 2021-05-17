import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RouterModule, Routes } from '@angular/router';
import { applyDomino } from '@ntegral/ngx-universal-window';
import { join } from 'path';
import { AppShellComponent } from './app-shell/app-shell.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const BROWSER_DIR = join(process.cwd(), 'dist/jankless/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));
const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [AppModule, ServerModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {}

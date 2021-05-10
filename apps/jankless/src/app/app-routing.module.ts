import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from '@jankless/ui';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      metaTitle: 'Home Page',
      metaDescription: 'Home page for jankless demo',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      metaTitle: 'Contact Page',
      metaDescription: 'Contact page for jankless demo',
    },
  },
  {
    path: 'dialog',
    outlet: 'modal',
    component: DialogComponent,
  },
  {
    path: '',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

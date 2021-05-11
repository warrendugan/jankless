import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@jankless/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterService } from './router.service';

@NgModule({
  declarations: [AppComponent, ContactComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule.forRoot()],
  providers: [RouterService],
  bootstrap: [AppComponent],
})
export class AppModule {}

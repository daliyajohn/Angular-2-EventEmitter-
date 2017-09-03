import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './main/about/about.module';
import { HomeModule } from './main/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

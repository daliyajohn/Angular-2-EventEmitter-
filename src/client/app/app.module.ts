import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule } from './main/main-routing.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { MainService } from './main/main.service';

@NgModule({
  imports: [BrowserModule, HttpModule,MainModule,MainRoutingModule, AppRoutingModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [ MainService],
  bootstrap: [AppComponent]

})
export class AppModule { }

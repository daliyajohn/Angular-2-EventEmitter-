import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [SharedModule, MainRoutingModule],
  declarations: [HomeComponent, AboutComponent, MainComponent],
  exports: [HomeComponent, AboutComponent, MainComponent],
  providers: [NameListService]
})
export class MainModule { }
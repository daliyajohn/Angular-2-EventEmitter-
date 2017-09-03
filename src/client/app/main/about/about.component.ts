import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor(public mainservice:MainService) {}
  setPage1() {
    this.mainservice.step.emit(3);
  }
}

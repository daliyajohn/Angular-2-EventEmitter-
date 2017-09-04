import { Component } from '@angular/core';
import { MainService } from './main.service';
/**
 * This class represents the lazy loaded AboutCompon setPage3(value:any) {
    this.mainservice.step.emit(2);
  }ent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {
  public value:any;
  constructor(public mainservice:MainService) {
    this.mainservice.step.subscribe(
      (obj: any) => {
        if (obj === 2) {
          this.value = 2;
        }
      })
  }
  setPage3(value:any) {
    this.mainservice.step.emit(2);
  }
}

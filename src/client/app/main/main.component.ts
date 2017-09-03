import { Component } from '@angular/core';
import { AppService } from '../app.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class AboutComponent {
  constructor(public appservice:AppService) {
  }
}

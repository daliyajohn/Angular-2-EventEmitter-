import { Component } from '@angular/core';
import { AppService } from '../../app.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor(public appservice:AppService) {
  }
}

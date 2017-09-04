import { Component, OnInit } from '@angular/core';
import { NameListService } from '../../shared/name-list/name-list.service';
import { MainService } from '../main.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent  {
  public value:any;
  constructor(public mainservice:MainService) {}
}

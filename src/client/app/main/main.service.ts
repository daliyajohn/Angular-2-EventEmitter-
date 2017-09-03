import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class MainService {
  public step: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http) {}
}

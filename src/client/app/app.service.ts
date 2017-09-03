import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
  public step: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http) {}
}

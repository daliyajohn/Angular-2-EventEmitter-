import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
  constructor(private http: Http) {}
}

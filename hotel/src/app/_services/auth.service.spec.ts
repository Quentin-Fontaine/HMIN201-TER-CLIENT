import { TestBed } from '@angular/core/testing';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-type',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Subject<string> = new BehaviorSubject<string>(undefined);
  private urlBase = 'http://localhost:8888/';

  constructor(private http: HttpClient) {}

}

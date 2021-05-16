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

  // tslint:disable-next-line:typedef
  getUsers() { return this.http.get(this.urlBase + 'membres'); }

  // tslint:disable-next-line:typedef
  getUser() { return this.user; }

  // tslint:disable-next-line:typedef
  connect(data: string) { this.user.next(data); }

  // tslint:disable-next-line:typedef
  disconnect() { this.user.next(null); }

  verificationConnexion(identifiants): Observable<any> {
    return this.http.post(this.urlBase + '/connexion', JSON.stringify(identifiants), httpOptions);
  }

  verificationInscription(identifiants: any): Observable<any> {
    return this.http.post(this.urlBase + '/inscription', JSON.stringify(identifiants), httpOptions);
  }
}


// describe('AuthService', () => {
//   let _services: AuthService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     _services = TestBed.inject(AuthService);
//   });
//
//   it('should be created', () => {
//     expect(_services).toBeTruthy();
//   });
// });

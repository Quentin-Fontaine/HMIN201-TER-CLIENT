import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'Content-type',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Subject<string> = new BehaviorSubject<string>('');
  public urlBase = 'http://localhost:8888/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.urlBase + 'membres');
  }

  // tslint:disable-next-line:typedef
  getUser() {
    return this.user;
  }
  // tslint:disable-next-line:typedef
  connect(data: string) {
    this.user.next(data);
  }
  // tslint:disable-next-line:typedef
  disconnect() {
    this.user.next('');
  }

  verificationConnexion(identifiants: any): Observable<any> {
    return this.http.post(this.urlBase + '/connexion', JSON.stringify(identifiants), httpOptions);
  }

  verificationInscription(identifiants: any): Observable<any> {
    return this.http.post(this.urlBase + '/inscription', JSON.stringify(identifiants), httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Access-Control-Allow-Methods': 'GET,POST',
//     'Access-Control-Allow-Headers': 'Content-type',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  memberId: string;

  constructor(private router: Router, private http: HttpClient) {}

  createNewMember(lastname: string, firstname: string, email: string, password: string, role: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:8888/api/auth/signup',
        { lastname: lastname, firstname: firstname, email: email, password: password, role: role })
        .subscribe(
          () => {
            this.login(email, password).then(
              () => {
                resolve();
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:8888/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData: { token: string, memberId: string }) => {
            this.token = authData.token;
            this.memberId = authData.memberId;
            this.isAuth$.next(true);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  logout(): void {
    this.isAuth$.next(false);
    this.memberId = null;
    this.token = null;
  }

}

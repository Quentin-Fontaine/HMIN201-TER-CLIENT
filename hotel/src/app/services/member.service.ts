import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../models/member.model';
import { Subject } from 'rxjs';
import {Hotel} from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) {}

  private members: Member[] = [];
  public member$ = new Subject<Member[]>();

  getAllMembers(): void {
    this.http.get('http://localhost:8888/api/members')
      .subscribe(
        (members: Member[]) => {
          if (members) {
            this.members = members;
            this.emitMember();
          }
          },
        (error) => {
          console.log(error);
        }
        );
  }

  emitMember(): void {
    this.member$.next(this.members);
  }

  getMemberById(id: string): Promise<Member> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8888/api/members/' + id)
        .subscribe(
          (response: Member) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

}

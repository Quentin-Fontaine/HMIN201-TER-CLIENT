import { Injectable } from '@angular/core';
import { Opinion } from '../_models/opinion.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Hotel} from '../_models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(private http: HttpClient) { }

  private opinions: Opinion[] = [];
  public opinion$ = new Subject<Opinion[]>();

  getAllOpinions(): void {
    this.http.get('http://localhost:8888/api/opinions')
      .subscribe(
        (opinions: Opinion[]) => {
          if (opinions) {
            this.opinions = opinions;
            this.emitOpinion();
          }
        },
        (error) => {
          console.log(error);
        });
  }

  getNotValidatedOpinions(): void {
    this.http.get('http://localhost:8888/api/opinions/notvalidated')
      .subscribe(
        (opinions: Opinion[]) => {
          if (opinions) {
            this.opinions = opinions;
            this.emitOpinion();
          }
        },
        (error) => {
          console.log(error);
        });
  }

  getOwnOpinions(id: string): void {
    this.http.get('http://localhost:8888/api/members/' + id + '/opinions')
      .subscribe(
        (opinions: Opinion[]) => {
          if (opinions) {
            this.opinions = opinions;
            this.emitOpinion();
          }
        },
        (error) => {
          console.log(error);
        });
  }

  emitOpinion(): void {
    this.opinion$.next(this.opinions);
  }

  createNewOpinion(opinion: Opinion) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8888/api/opinions', opinion)
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  modifyOpinion(id: string, opinion: Opinion) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:8888/api/opinions/' + id, opinion).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteOpinion(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:8888/api/opinions/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}

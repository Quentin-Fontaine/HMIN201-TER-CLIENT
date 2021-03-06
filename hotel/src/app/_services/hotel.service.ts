import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../_models/hotel.model';
import { Subject } from 'rxjs';
import { Opinion } from '../_models/opinion.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) {}

  private hotels: Hotel[] = [];
  public hotel$ = new Subject<Hotel[]>();

  private opinions: Opinion[] = [];
  public opinion$ = new Subject<Opinion[]>();

  getAllHotels(): void {
    this.http.get('http://localhost:8888/api/hotels')
      .subscribe(
      (hotels: Hotel[]) => {
        if (hotels) {
          this.hotels = hotels;
          this.emitHotel();
        }
      },
      (error) => {
        console.log(error);
      });
  }

  getOwnHotels(id: string): void {
    this.http.get('http://localhost:8888/api/members/' + id + '/hotels')
      .subscribe(
        (hotels: Hotel[]) => {
          if (hotels) {
            this.hotels = hotels;
            this.emitHotel();
          }
        },
        (error) => {
          console.log(error);
        });
  }

  emitHotel(): void {
    this.hotel$.next(this.hotels);
  }

  getHotelById(id: string): Promise<Hotel> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8888/api/hotels/' + id)
        .subscribe(
          (response: Hotel) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getOpinionsByHotel(hotelId: string): void {
    this.http.get('http://localhost:8888/api/hotels/' + hotelId + '/opinions')
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

  createNewHotel(hotel: Hotel) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8888/api/hotels', hotel)
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
}

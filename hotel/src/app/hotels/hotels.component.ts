import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { Observable, Subscription } from 'rxjs';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, OnDestroy {

  public hotels: Hotel[] = [];
  // public id: string;
  private hotelSub: Subscription;

  constructor(private hotelService: HotelService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.hotelSub = this.hotelService.hotel$.subscribe(
      (hotels) => {
        this.hotels = hotels.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
      }
    );
    this.hotelService.getAllHotels();
  }

  ngOnDestroy(): void {
    this.hotelSub.unsubscribe();
  }

  onHotelClicked(id: string): void {
    console.log('id: ' + id);
    this.router.navigate(['/hotel', { id }])
      .then(() => {
        console.log('Successfully navigating to /hotel');
      })
      .catch(reason => {
        console.log('Failed to navigate to /hotel with reason: ' + reason);
      });
  }

}

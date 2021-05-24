import {Component, OnDestroy, OnInit} from '@angular/core';
import {HotelService} from '../_services/hotel.service';
import {Router} from '@angular/router';
import {Hotel} from '../_models/hotel.model';
import {Subscription} from 'rxjs';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-own-hotels',
  templateUrl: './own-hotels.component.html',
  styleUrls: ['./own-hotels.component.scss']
})
export class OwnHotelsComponent implements OnInit, OnDestroy {

  public hotels: Hotel[] = [];
  private hotelSub: Subscription;

  constructor(private hotelService: HotelService,
              private auth: AuthService,
              private router: Router) { }

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
    this.hotelService.getOwnHotels(this.auth.memberId);
  }

  ngOnDestroy(): void {
    this.hotelSub.unsubscribe();
  }

  goAddHotel() {
    this.router.navigate(['/add-hotel']);
  }
}

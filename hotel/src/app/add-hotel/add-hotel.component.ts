import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {
  public hotel = {name: '', address: '', zip: '', city: '', country: '', owner: ''};

  constructor() { }

  ngOnInit(): void {
  }

}

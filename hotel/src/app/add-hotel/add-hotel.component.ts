import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../_services/auth.service';
import {Hotel} from '../_models/hotel.model';
import {htmlAstToRender3Ast} from '@angular/compiler/src/render3/r3_template_transform';
import {HotelService} from '../_services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {

  hotelForm: FormGroup;
  loading = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      address: [null, Validators.required],
      zip: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
      ownerId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    const hotel = new Hotel();
    hotel.name = this.hotelForm.get('name').value;
    hotel.description = this.hotelForm.get('description').value;
    hotel.address = this.hotelForm.get('address').value;
    hotel.zip = this.hotelForm.get('zip').value;
    hotel.city = this.hotelForm.get('city').value;
    hotel.country = this.hotelForm.get('country').value;
    hotel.owner = this.auth.memberId;
    console.log(hotel);
    this.hotelService.createNewHotel(hotel)
      .then(() => {
        this.hotelForm.reset();
        this.router.navigate(['/own-hotels']);
      })
      .catch(
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

}

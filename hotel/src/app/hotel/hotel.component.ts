import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Opinion } from '../models/opinion.model';
import { Member } from '../models/member.model';
import {MemberService} from '../services/member.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  public hotel: Hotel;
  public opinionForm: FormGroup;

  public opinions: Opinion[] = [];
  public hotelId: string;
  private opinionSub: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private hotelService: HotelService,
              private memberService: MemberService,
              private auth: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.hotelId = params.id;
        this.hotelService.getHotelById(params.id)
          .then((hotel: Hotel) => {
            this.hotel = hotel;
          });
      });

    this.opinionSub = this.hotelService.opinion$.subscribe(
      (opinions) => {
        this.opinions = opinions;
      });
    this.hotelService.getOpinionsByHotel(this.hotelId);
  }

  getMemberName(id: string): void {
    this.memberService.getMemberById(id)
      .then((member: Member) => {
        console.log(member.lastname + member.firstname);
        return member.lastname + member.firstname;
      });
  }

}

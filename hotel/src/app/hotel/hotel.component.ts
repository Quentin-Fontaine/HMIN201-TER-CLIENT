import { Component, OnInit } from '@angular/core';
import { Hotel } from '../_models/hotel.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelService } from '../_services/hotel.service';
import { AuthService } from '../_services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Opinion } from '../_models/opinion.model';
import { Member } from '../_models/member.model';
import {MemberService} from '../_services/member.service';
import {OpinionService} from '../_services/opinion.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  public hotel: Hotel;
  public opinionForm: FormGroup;
  public errorMessage: string;

  public opinions: Opinion[] = [];
  public hotelId: string;
  private opinionSub: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private hotelService: HotelService,
              private memberService: MemberService,
              private auth: AuthService,
              private formBuilder: FormBuilder,
              private opinionService: OpinionService) { }

  ngOnInit(): void {
    this.opinionForm = this.formBuilder.group({
      text: [null, Validators.required]
    });
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

  onSubmit(): void {
    const opinion = new Opinion();
    opinion.text = this.opinionForm.get('text').value;
    opinion.writer = this.auth.memberId;
    opinion.hotel = this.hotel._id;
    console.log(opinion);
    this.opinionService.createNewOpinion(opinion)
      .then(() => {
        this.opinionForm.reset();
      })
      .catch(
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }
}
